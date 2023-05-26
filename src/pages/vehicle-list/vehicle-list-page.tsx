// libraries
import React, { useReducer, useEffect, useState } from 'react'
import Modal from 'react-modal'
import DataTable, { createTheme } from 'react-data-table-component'
import { v4 as uuidv4 } from 'uuid';

// components
import Button from '@/components/button'
import Panel from '@/components/panel'
import DashboardLayout from '@/components/dashboard'
import toast from 'react-hot-toast'
import { getVehicles } from './vehicle-list-service'
import { customStyles, StyledTable } from '@/components/datatable'
import { caseInsensitiveSort } from '@/utils/functions';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Skeleton, Stack } from '@chakra-ui/react';
import { styles } from '@/utils/theme';
import { navigate } from '@reach/router';
import { IVehicle } from '@/interfaces/vehicle';

const VehicleList = (props: any) => {

  // theme
  const background = useColorModeValue('transparent', 'transparent');
  const textColor = useColorModeValue('#1A202C', 'white');
  const secondaryTextColor = useColorModeValue('secondaryGray.700', 'alphaWhite.600');
  const divider = useColorModeValue('rgba(135, 140, 189, 0.3)', 'rgba(135, 140, 189, 0.3)');

  createTheme('infosis-theme', {
    text: {
      primary: textColor,
      secondary: secondaryTextColor,
    },
    background: {
      default: background,
    },
    divider: {
      default: divider,
    },
  });

  const columns = [
    {
      name: 'PLACA',
      selector: (row: { placa: any; }) => row.placa,
      sortable: true,
    },
    {
      name: 'CHASSI',
      selector: (row: { chassi: any; }) => row.chassi,
      sortable: true,
    },
    {
      name: 'RENAVAM',
      selector: (row: { renavam: any; }) => row.renavam,
      sortable: true,
    },
    {
      name: 'MARCA',
      selector: (row: { marca: any; }) => row.marca,
      sortable: true,
    },
    {
      name: 'MODELO',
      selector: (row: { modelo: any; }) => row.modelo,
      sortable: true,
    },
    {
      name: 'ANO',
      selector: (row: { ano: any; }) => row.ano,
      sortable: true,
    },
    {
      cell: (row: any) => (
        <Button onClick={() => goToVehicle(row)}>Ver Veículo</Button>
      ),
      style: {
        Button: styles.Button,
      },
      sortable: false,
      sortFunction: caseInsensitiveSort,
      ignoreRowClick: true,
    },
  ]

  // states
  const [isLoading, setIsLoading] = useState(false)
  const [vehicles, setVehicles] = useState([])

  // use effects
  useEffect(() => {
    loadVehicles()
  }, [])

  // apis
  async function loadVehicles() {
    setIsLoading(true)
    const response = await getVehicles()
    if (response.error) {
      setIsLoading(false)
      toast.error(response.message)
    } else {
      setVehicles(response.message)
      setIsLoading(false)
    }
  }

  // methods
  async function goToVehicle(vehicle: IVehicle) {
    return navigate(`/veiculos/detalhes/${vehicle.placa}`)
  }

  // main
  return (
    <>
      <DashboardLayout screenTitle="Lista de Veículos" screenSubtitle="Listagem de todos os veículos cadastrados">
        {/* views */}
        <Panel heading="Veículos">
          {isLoading && (
            <Stack mx='20px' my='20px'>
              <Skeleton height='20px' isLoaded={!isLoading} />
              <Skeleton height='20px' isLoaded={!isLoading} />
              <Skeleton height='20px' isLoaded={!isLoading} />
            </Stack>
          )}
          {vehicles &&
            (
              <StyledTable background={background} color={textColor}>
                <DataTable
                  theme={'infosis-theme'}
                  columns={columns}
                  customStyles={customStyles}
                  noDataComponent="Nenhum veículo encontrado."
                  pagination={true}
                  paginationPerPage={10}
                  striped={true}
                  paginationRowsPerPageOptions={[10, 15, 20, 25, 30]}
                  keyField={uuidv4()}
                  paginationComponentOptions={{ rowsPerPageText: 'Linhas por página:', rangeSeparatorText: 'de', noRowsPerPage: false, selectAllRowsItem: false, selectAllRowsItemText: 'Todos' }}
                  data={vehicles} />
              </StyledTable>
            )}
        </Panel>
      </DashboardLayout>
    </>
  )
};

const styleModal: Modal.Styles = {
  content: {
    width: '60%',
    maxWidth: 750,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: { zIndex: 999 }
};

export default VehicleList;

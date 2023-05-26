// libraries
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast'

// js
import { getVehicleInfo, updateVehicle } from './vehicle-edit-service';

// components
import DashboardLayout from '@/components/dashboard';
import Panel from '@/components/panel';
import { Column, Row } from '@/components/positioning';
import { Input, Select } from '@/components/form-fields';
import Button from '@/components/button';
import { useColorModeValue } from '@chakra-ui/react';

import { IVehicle } from '@/interfaces/vehicle';
import { navigate } from '@reach/router';

function VehicleEdit(props: any) {
  const selectedVehicle = props.plate

  useEffect(() => {
    loadInfo();
  }, []);

  // consts
  const initialInfo: IVehicle = {
    id: 0,
    placa: '',
    chassi: '',
    renavam: '',
    marca: '',
    modelo: '',
    ano: 0,
  };

  // state
  const [infoVehicle, setInfoVehicle] = useState<IVehicle>(initialInfo);

  //theme
  const background = useColorModeValue('transparent', 'transparent');
  const textColor = useColorModeValue('#1A202C', 'white');

  const loadInfo = async () => {
    const query = getVehicleInfo(selectedVehicle)
    toast.promise(
      query,
      {
        error: 'Erro ao carregar informações',
        loading: 'Carregando informações...',
        success: 'Informações carregadas'
      }
    )
    const response = await query

    if (response) {
      setInfoVehicle(response)
    }
  }


  // api
  async function editVehicle() {
    try {
      toast.loading('Atualizando informações')
      const responseEdit = await updateVehicle(selectedVehicle, infoVehicle);

      if (responseEdit.statusCode === 200) {
        toast.success('Veículo atualizado!')
        location.reload()
      }
    } catch (error) {
      toast.error(error.response.message)
    }
  }

  // methods
  function disabledButton() {
    const existEmptyValue = Object.values(infoVehicle).filter((info) => info === '');
    return !!existEmptyValue
  }

  function handleChange(event: any) {
    setInfoVehicle({
      ...infoVehicle,
      [event.target.name]: event.target.value,
    });
  }

  function onGoBack() {
    navigate('/veiculos')
  }

  // main
  return (
    <DashboardLayout
      screenTitle="Editar Veículo"
    >
      {infoVehicle ?
        <>
          <Column gap="10px">
            <Panel padding='25px' heading="Informações">
              <Column>
                <Row columnOnMobile gap="15px">
                  <Input
                    color={textColor}
                    background={background}
                    label="Placa do Veículo"
                    type="text"
                    value={infoVehicle.placa}
                    onChange={handleChange}
                    name='placa'
                    placeholder="AAA0A00"
                  />
                  <Input
                    color={textColor}
                    background={background}
                    label="Chassi"
                    name="chassi"
                    type="text"
                    value={infoVehicle.chassi}
                    onChange={handleChange}
                    placeholder="Ex: AAABRA000000"
                  />
                  <Input
                    color={textColor}
                    background={background}
                    label="RENAVAM"
                    name='renavam'
                    type="text"
                    value={infoVehicle.renavam}
                    onChange={handleChange}
                    placeholder="Ex: A03290"
                  />
                </Row>
                <Row columnOnMobile gap="15px">
                  <Input
                    color={textColor}
                    background={background}
                    label="Marca"
                    name='marca'
                    type="text"
                    value={infoVehicle.marca}
                    onChange={handleChange}
                    placeholder="Ex: VW"
                  />
                  <Input
                    color={textColor}
                    background={background}
                    label="Modelo"
                    name='modelo'
                    type="text"
                    value={infoVehicle.modelo}
                    onChange={handleChange}
                    placeholder="New Beetle"
                  />
                  <Input
                    color={textColor}
                    background={background}
                    label="Ano"
                    name='ano'
                    type="text"
                    value={infoVehicle.ano}
                    onChange={handleChange}
                    placeholder="Ex: 2020"
                  />
                </Row>
              </Column>
            </Panel>
            <Row gap="16px">
              <Button disabled={disabledButton()} onClick={editVehicle}>Salvar</Button>
            </Row>
          </Column>
          {/* modals */}
        </>
        : null}
    </DashboardLayout>
  )
}

export default VehicleEdit;

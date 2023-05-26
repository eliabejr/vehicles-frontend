// libraries
import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

// js
import { getVehicleInfo } from './vehicle-view-service'

// components
import Button from '@/components/button'
import { H3, H4 } from '@/components/typography'
import { Column, Row } from '@/components/positioning'
import DashboardLayout from '@/components/dashboard'
import Panel from '@/components/panel'

import { Skeleton } from '@chakra-ui/react'
import { IVehicle } from '@/interfaces/vehicle'
import { navigate } from '@reach/router'

const VehicleView = (props: any) => {
  // states
  const [info, setInfo] = useState<IVehicle>()
  const [haveData, setHaveData] = useState<boolean>(false)

  // use effects
  useEffect(() => {
    loadInfo()
  }, [])

  // apis
  async function loadInfo() {
    try {
      const queryInfo = getVehicleInfo(props.plate)
      toast.promise(
        queryInfo,
        {
          error: 'Não foi possível carregar informações do veículo',
          loading: 'Carregando informações do veículo',
          success: 'Informações carregadas!'
        }
      )
      const responseInfo = await queryInfo
      setInfo(responseInfo)
      setHaveData(true)
    } catch (error) {
      toast.error('Tente novamente')
    }
  }

  // methods
  function editVehicle() {
    const route = `/veiculos/editar/${props.plate}`
    navigate(route)
  }

  // renders
  function RenderInformation() {
    return (
      <Panel heading="Informações do veículo" padding='26px'>
        <Row gap="20px" columnOnMobile>
          <Row columnOnMobile>
            <Column>
              <div>
                <H3 size="1.1rem">Placa do Veículo</H3>
                <Skeleton height='20px' isLoaded={haveData}>
                  <span>{info?.placa || ''}</span>
                </Skeleton>
              </div>
              <div>
                <H3 size="1.1rem">Chassi do Veículo</H3>
                <Skeleton height='20px' isLoaded={haveData}>
                  <span>{info?.chassi}</span>
                </Skeleton>
              </div>
              <div>
                <H3 size="1.1rem">Renavam do Veículo</H3>
                <Skeleton height='20px' isLoaded={haveData}>
                  <span>{info?.renavam}</span>
                </Skeleton>
              </div>
            </Column>
            <Column>
              <div>
                <H3 size="1.1rem">Marca</H3>
                <Skeleton height='20px' isLoaded={haveData}>
                  <span>{info?.marca || ''}</span>
                </Skeleton>
              </div>
              <div>
                <H3 size="1.1rem">Modelo</H3>
                <Skeleton height='20px' isLoaded={haveData}>
                  <span>{info?.modelo || ''}</span>
                </Skeleton>
              </div>
              <div>
                <H3 size="1.1rem">Ano</H3>
                <Skeleton height='20px' isLoaded={haveData}>
                  <span>{info?.ano || ''}</span>
                </Skeleton>
              </div>
            </Column>
          </Row>
        </Row>
      </Panel>
    )
  }

  // main
  return (
    <>
      <DashboardLayout
        screenTitle="Relatório do Veículo"
      >
        {/* views */}
        <Column gap="20px">
          <Row>
            <Button onClick={editVehicle} disabled={!haveData}>Editar Veículo</Button>
          </Row>
          {RenderInformation()}
        </Column>
      </DashboardLayout >
    </>
  )
}

export default VehicleView

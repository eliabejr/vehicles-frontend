// libraries
import React, { useEffect, useReducer, useState } from 'react'
import Modal from 'react-modal'
import toast from 'react-hot-toast'

// js
import { registerVehicle } from './vehicle-register-service'

// components
import Button from '@/components/button'
import Panel from '@/components/panel'
import DashboardLayout from '@/components/dashboard'
import { Column, Row } from '@/components/positioning'
import { Input } from '@/components/form-fields'
import { IVehicle } from '@/interfaces/vehicle'
import { navigate } from '@reach/router'
import { useColorModeValue } from '@chakra-ui/react'

const VehicleRegister = (props: any) => {

  const initialInfo: IVehicle = {
    id: 0,
    placa: '',
    chassi: '',
    renavam: '',
    marca: '',
    modelo: '',
    ano: 0,
  };

  const background = useColorModeValue('transparent', 'transparent');
  const textColor = useColorModeValue('#1A202C', 'white');

  // reducers
  const [infoVehicle, setInfoVehicle] = useState<IVehicle>(initialInfo)

  const [buttonDisabled, setButtonDisabled] = useState(false)

  // apis
  async function finish() {
    toast.loading('Cadastrando veículo...', {
      duration: 1000
    })
    const reponse = await registerVehicle(infoVehicle)
    if (reponse.status === 200 || reponse.status === 201) {
      toast.success('Veículo cadastrado com sucesso!')
      navigate(`/`)
    } else {
      toast.error('Tente novamente')
    }
  }

  // functions
  async function handleChange(event: any) {
    setInfoVehicle({
      ...infoVehicle, [event.target.name]: event.target.value
    })
  }
  // use effects
  useEffect(() => {
    const buttonDisabledValue = !!infoVehicle.placa || !!infoVehicle.chassi || !!infoVehicle.renavam || !!infoVehicle.marca || !!infoVehicle.modelo || !!infoVehicle.ano
    setButtonDisabled(!buttonDisabledValue)
  }, [infoVehicle])

  return (
    <>
      <DashboardLayout
        screenTitle="Cadastrar Veículo"
        screenSubtitle="Cadastrar um novo veículo no sistema"
      >
        <Column gap="20px">
          <Panel heading="Informações do Veículo" padding='25px'>
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
          <Row gap="15px">
            {/* <Button>Voltar</Button> */}
            <Button onClick={finish} disabled={buttonDisabled}>Cadastrar</Button>
          </Row>
        </Column>
      </DashboardLayout>
    </>
  )
}

export default VehicleRegister

/* eslint-disable max-len */
import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Router } from "@reach/router"
import VehicleList from './pages/vehicle-list/vehicle-list-page'
import VehicleView from './pages/vehicle-view/vehicle-view-page'
import VehicleEdit from './pages/vehicle-edit/vehicle-edit-page'
import VehicleRegister from './pages/user-register/vehicle-register-page'

export default function App() {

  return (
    <>
      <Router>
        <VehicleList path={'/'} />
        <VehicleView path={`/veiculos/detalhes/:plate`} />
        <VehicleEdit path={`/veiculos/editar/:plate`} />
        <VehicleRegister path={`/veiculos/cadastrar`} />
      </Router>
      <Toaster
        toastOptions={{
          position: 'top-center',
          duration: 5000,
        }}
      />
    </>
  )
}

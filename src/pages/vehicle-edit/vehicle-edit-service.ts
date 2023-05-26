// services
import { API } from '@/services/connectors';

import { IVehicle } from '@/interfaces/vehicle';

// editar dados pessoais do colaborador
export async function updateVehicle(id: number, info: IVehicle) {
  // dados da requisição
  const url = `/vehicles/${id}`

  const body = {
    placa: info.placa,
    chassi: info.chassi,
    renavam: info.renavam,
    marca: info.marca,
    modelo: info.modelo,
    ano: Number(info.ano),
  }

  // request
  try {
    const response = await API.patch(url, body)
    if (response.status === 200) {
      return response?.data || []
    }
  } catch (error) {
    const msg = error.response.data.message;
    if (error.response.status === 401) {
      alert('Tente novamente')
    }
    return {
      statusCode: error.response.status,
      message: msg,
    }
  }
}

export async function getVehicleInfo(plate: string): Promise<any> {
  const url = `/vehicles/plate/${plate}`

  // request
  try {
    const response = await API.get(url);
    if (response.status === 200) {
      return response.data || []
    }
  } catch (error) {
    const msg = error.response.data
    if (error.response.status === 401) {
      alert('Tente novamente')
    }
    return {
      message: msg,
      statusCode: error.response.status
    }
  }
}
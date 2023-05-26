// js
import { AxiosResponse } from 'axios'
import { API } from '@/services/connectors'
import { IVehicle } from '@/interfaces/vehicle'

export async function registerVehicle(info: IVehicle): Promise<AxiosResponse> {
  const url = '/vehicles';
  const body = {
    placa: info.placa,
    chassi: info.chassi,
    renavam: info.renavam,
    marca: info.marca,
    modelo: info.modelo,
    ano: Number(info.ano),
  }

  try {
    const response = await API.post(url, body);
    return response
  } catch (error) {
    if (error.response.status === 401) {
      alert('Tente novamente')
    }
    return error.response.data.message;
  }

}

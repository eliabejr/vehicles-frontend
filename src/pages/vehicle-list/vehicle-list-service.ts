import { API } from '@/services/connectors'

export const getVehicles = async (): Promise<any> => {
  const url = '/vehicles'

  try {
    const response = await API.get(url)
    return {
      statusCode: 200,
      message: response.data
    }
  } catch (error) {
    if (error.response.status === 401) {
      alert('Tente novamente')
    }
    return {
      statusCode: error.response.status,
      message: 'Não foi possível buscar veículos',
    }
  }
}
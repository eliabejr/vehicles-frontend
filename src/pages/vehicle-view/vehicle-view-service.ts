// js
import { API } from '@/services/connectors';

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

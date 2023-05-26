import axios from "axios"

const baseUrl = process.env.API_URL
const API = axios.create({
  baseURL: baseUrl,
})

export { API, baseUrl }
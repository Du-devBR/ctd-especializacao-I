import axios from "axios"

export const api = axios.create({
  baseURL: "https://server-ecommerce-dubills.vercel.app/api",
})

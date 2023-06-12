import { ResponseProducts } from "../pages/products/type";
import { api } from "./api";

export const  getAllProducts = async () =>{
  const response = await api.get<ResponseProducts[]>("/products");
  return response.data
}

export const getProductById = async (_id: string): Promise<ResponseProducts> => {
  const response = await api.get<ResponseProducts>(`/product/${_id}`);
  return response.data
}

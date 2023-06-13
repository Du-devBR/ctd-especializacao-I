import { ResponseProducts, SendProducts } from "../pages/products/type";
import { api } from "./api";

export const  getAllProducts = async () =>{
  const response = await api.get<ResponseProducts[]>("/products");
  return response.data
}

export const getProductById = async (_id: string): Promise<ResponseProducts> => {
  const response = await api.get<ResponseProducts>(`/product/${_id}`);
  return response.data
}

export const saveProduct = async (product: SendProducts) => {
  const response = await api.post<SendProducts>("/products", product);
  return response.data
}

export const deleteProductId = async (_id: string): Promise<ResponseProducts> => {
  const response = await api.delete<ResponseProducts>(`/product/${_id}`)
  return response.data
}


export const updateProductId = async (product: ResponseProducts) => {
  const response = await api.put<ResponseProducts>(`/product/${product._id}`, product)
  return response.data;
}

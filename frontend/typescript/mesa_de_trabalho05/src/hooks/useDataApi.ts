import {useQueryClient, useQuery, useMutation} from '@tanstack/react-query';
import { getAllProducts, getProductById } from '../services/fethUsers';
import { ResponseProducts } from '../pages/products/type';

export function ApiDataProducts(){
  const {data, isFetching, error} = useQuery(["@products"], getAllProducts, {
    refetchOnWindowFocus: false,
  })


  return {
    productsData: data,
    isFetching,
    error,
  }

}

export function ApiDataProductId(_id: string){
  const {data, isFetching, error} = useQuery<ResponseProducts>(
    ["@products", _id], () => getProductById(_id))

    return {
      productData: data,
      isFetching,
      error,
    }
}

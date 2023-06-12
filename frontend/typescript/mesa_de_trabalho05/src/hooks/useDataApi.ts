import {useQueryClient, useQuery, useMutation} from '@tanstack/react-query';
import { getAllProducts, getProductById, saveProduct } from '../services/fethUsers';
import { ResponseProducts } from '../pages/products/type';

export function ApiDataProducts(){

  const queryClient = useQueryClient()
  const {data, isFetching, error} = useQuery(["@products"], getAllProducts, {
    refetchOnWindowFocus: false,
  })

  const saveNewProduct = useMutation(saveProduct, {
    onSuccess: ()=> {
      queryClient.invalidateQueries(["@products"])
    },
    onError: ()=> alert("erro")
  })

  return {
    productsData: data,
    isFetching,
    error,
    save: saveNewProduct.mutate,
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

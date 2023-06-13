import {useQueryClient, useQuery, useMutation} from '@tanstack/react-query';
import { deleteProductId, getAllProducts, getProductById, saveProduct } from '../services/fethUsers';
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
  const queryClient = useQueryClient()

  const {data, isFetching, error} = useQuery<ResponseProducts>(
    ["@products", _id], () => getProductById(_id)
  )

  const deleteProduct = useMutation<ResponseProducts>(() => deleteProductId(_id), {
    onSuccess: ()=> {
      queryClient.invalidateQueries(["@products"])
    },
    onError: ()=> alert("erro")
  })

    return {
      productData: data,
      isFetching,
      error,
      deleteId: deleteProduct.mutate,

    }
}


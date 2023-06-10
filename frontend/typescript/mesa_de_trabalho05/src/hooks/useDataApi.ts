import {useQueryClient, useQuery, useMutation} from '@tanstack/react-query';
import { getAllProducts } from '../services/fethUsers';

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

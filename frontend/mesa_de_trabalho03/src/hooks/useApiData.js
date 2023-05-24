import {useQueryClient, useQuery} from '@tanstack/react-query'
import { getCourses } from '../service/crud'


export function ApiData(){

  const queryClient = useQueryClient()

  const {data, isFetching, error} = useQuery(["@diario"], getCourses, {
    refetchOnWindowFocus: false,
  })

  return{
    cursosData: data,
    isFetching,
    error,
  }
}

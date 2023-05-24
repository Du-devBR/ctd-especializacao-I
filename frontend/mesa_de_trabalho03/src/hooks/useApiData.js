import {useQueryClient, useQuery} from '@tanstack/react-query'
import { getAlunos, getCourses } from '../service/crud'


export function ApiData(){

  const {data, isFetching, error} = useQuery(["@curso"], getCourses, {
    refetchOnWindowFocus: false,
  })

  return{
    cursosData: data,
    isFetching,
    error,
  }
}

export function ApiDataAluno(){
  const {data, isFetching, error} = useQuery(["@aluno"], getAlunos, {
    refetchOnWindowFocus: false
  })

  return{
    alunoData: data,
    isFetching,
    error,
  }
}

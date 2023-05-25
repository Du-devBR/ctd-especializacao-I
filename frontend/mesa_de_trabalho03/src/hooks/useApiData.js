import {useQueryClient, useQuery, useMutation} from '@tanstack/react-query'
import { deleteAluno, editAluno, getAlunos, getCourses, saveAluno } from '../service/crud'


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

  const queryClient = useQueryClient()

  const {data, isFetching, error} = useQuery(["@aluno"], getAlunos, {
    refetchOnWindowFocus: false
  })

  const saveNewAluno = useMutation(saveAluno, {
    onSuccess: () => queryClient.invalidateQueries(["@aluno"]),
    onError: () => alert("Erro ao salvar tarefa")
  })

  const editAlunoById = useMutation(editAluno, {
    onSuccess: () => queryClient.invalidateQueries(["@aluno"]),
    onError: () => alert("Erro ao editar tarefa")
  })

  const deleteAluboById = useMutation(deleteAluno, {
    onSuccess:() => queryClient.invalidateQueries(["@aluno"]),
    onError:() => alert("Erro ao excluir o aluno")
  })

  return{
    alunoData: data,
    isFetching,
    error,
    save: saveNewAluno.mutate,
    edit: editAlunoById.mutate,
    deleteId: deleteAluboById.mutate,
  }
}

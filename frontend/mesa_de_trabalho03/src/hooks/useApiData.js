import {useQueryClient, useQuery, useMutation} from '@tanstack/react-query'
import { deleteAluno, editAluno, getAlunos, getCourses, saveAluno } from '../service/crud'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    onSuccess: () => {
      toast.success("Aluno salvo com sucesso.")
      queryClient.invalidateQueries(["@aluno"])
    },
    onError: () => toast.error("Erro ao salvar tarefa")
  })

  const editAlunoById = useMutation(editAluno, {
    onSuccess: () => {
      toast.success("Aluno editado com sucesso.")
      queryClient.invalidateQueries(["@aluno"])
    },
    onError: () => toast.error("Erro ao editar tarefa")
  })

  const deleteAluboById = useMutation(deleteAluno, {
    onSuccess:() => {
      toast.success("Aluno deletado com sucesso.")
      queryClient.invalidateQueries(["@aluno"])
    },
    onError:() => toast.error("Erro ao excluir o aluno")
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

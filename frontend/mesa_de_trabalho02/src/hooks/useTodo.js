import { useMutation, useQuery, useQueryClient,  } from "@tanstack/react-query";
import { deleteTask, getListTasks, saveNewTask } from "../services/crud";

export function todo(){

  const queryClient = useQueryClient()

  const { data, isFetching, error } = useQuery(["@tasks"], getListTasks, {
    refetchOnWindowFocus: false,
  });

  const saveNewTaskTodo = useMutation(saveNewTask, {
    onSuccess: () => queryClient.invalidateQueries(["@tasks"]),
    onerror: () => alert("Erro ao cadatrar tarefa")
  })

  const deleteTaskById = useMutation(deleteTask, {
    onSuccess: () => queryClient.invalidateQueries(["@tasks"]),
    onerror: () => alert("Erro ao deletar tarefa")
  })

  return{
    todos: data,
    isFetching,
    error,
    saveTask: saveNewTaskTodo.mutate,
    deleteTaskId: deleteTaskById.mutate,
  }

}

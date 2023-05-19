import { useMutation, useQuery, useQueryClient,  } from "@tanstack/react-query";
import { getListTasks, saveNewTask } from "../services/crud";

export function todo(){

  const queryClient = useQueryClient()

  const { data, isFetching, error } = useQuery(["@tasks"], getListTasks, {
    refetchOnWindowFocus: false,
  });

  const saveNewTaskTodo = useMutation(saveNewTask, {
    onSuccess: () => queryClient.invalidateQueries(["@tasks"]),
    onerror: () => alert("")
  })

  return{
    todos: data,
    isFetching,
    error,
    saveTask: saveNewTaskTodo.mutate,
  }

}

import { useQuery } from "@tanstack/react-query";
import { getListTasks } from "../services/crud";

export function todo(){
  const { data, isFetching, error } = useQuery(["@todos"], getListTasks, {
    refetchOnWindowFocus: false,
  });

  return{
    todos: data,
    isFetching,
    error,
  }

}

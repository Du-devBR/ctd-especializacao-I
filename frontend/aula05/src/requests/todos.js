import  api  from "../services/api";

export async function getTasks(){
  return (await api.get('/todo')).data
}

/**
  Função para aicionar nova tarefa
 * @param {{title:string, date: Date}} todo
 */

export async function addTodo(todo){
  return (await api.post('/todo', todo)).data
}

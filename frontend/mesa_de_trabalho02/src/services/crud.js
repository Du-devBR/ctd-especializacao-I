import api from "./api"

/**
 * Função para pegar os dados da api
 * @author Eduardo Ananias da Silva
 * @returns {Promise<{id:number, title:string, date:Date}>}
 */

export async function getListTasks(){
  return (await api.get("/todo")).data
}

/**
 * Função para adicionar nova tarefa
 * @param {{title:string, date: Date}} todo
 */
export async function addNewTask(todo){
  return (await api.post("/todo", todo)).data
}

/**
 * Função para editar uma  tarefa
 * @param {{title:string, date: Date}} todo
 */
export async function editTask(todo){
  return (await api.post(`/todo/${todo.id}`, todo)).data
}

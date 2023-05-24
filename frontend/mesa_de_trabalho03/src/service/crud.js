import { api } from "./baseApi"
/**
 * Função para pegar todos os cursos cadastrados
 * @returns {Promise<{id:number, name:string}}
 */

export async function getCourses(){
  return (await api.get("/cursos")).data
}

import { api } from "./baseApi"
/**
 * Função para pegar todos os cursos cadastrados
 * @returns {Promise<{id:number, name:string}}
 */

export async function getCourses(){
  return (await api.get("/cursos")).data
}

/**
 * Função para pegar os alunos cadastrados
 * @returns {Promise<{_id:number, nome:string, matricula:string, curso:string, bimestre:string}}
 */
export async function getAlunos(){
  return (await api.get("/aluno")).data
}

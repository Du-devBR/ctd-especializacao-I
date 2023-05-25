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

/**
 * Função para salvar uma nova tarefa
 * @param {{nome:string, matricula:string, curso:string, bimestre:string}} aluno
 */

export async function saveAluno(aluno){
  return (await api.post("/aluno", aluno)).data
}

/**
 * Função para editar uma tarefa pelo id
 * @param {{nome:string, matricula:string, curso:string, bimestre:string}} aluno
 * @param {number} id
 */
export async function editAluno(aluno){
  return (await api.put(`/aluno/${aluno.id}`, aluno)).data
}

/**
 * Função para deletar uma tarefa pelo id
 * @param {id} id
 */

export async function deleteAluno(id){
  return (await api.delete(`/aluno/${id}`))
}

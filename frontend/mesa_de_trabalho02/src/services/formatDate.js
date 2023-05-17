/**
 * Função para formatar a data da tarefa para o padrão dd/mm/yyyy
 * @author Eduardo Ananias da Silva
 * @param {date} date
 * @returns {string}
 */

export function formatDate(date){
  const fomattedDateTask = new Date(date).toLocaleDateString('pt-BR')
  return fomattedDateTask
}

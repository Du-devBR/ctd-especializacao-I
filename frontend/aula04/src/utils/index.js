import axios from "axios"

/**
 * Função que recebe o ano de nasc de um usuario e retorna sua idade
 * @author Eduardo Ananias da Silva
 * @param {number} ano
 * @returns {number}
 */


export function calcurIdade(ano){

}

/**
 * Função que recebe uma lista de numeros e retorna uma lista de pares
 * @author Eduardo Ananias da Silva
 * @param {Array<number>} numeros
 * @returns {Array<number>}
 */
export function filtraNumerosPares(numeros){
  return numeros.filter((numero) => numero %2 === 0)

}

/**
 * Função que busca no servidor as infos de um produto
 * @author Eduardo Ananias da Silva
 * @param {number} id
 * @returns {Promise<{id:number, title:string, description:string}>}
 */

export async function getProducts(id){

  return (await axios.get(`https://dummyjson.com/products/${id}`)).data

}

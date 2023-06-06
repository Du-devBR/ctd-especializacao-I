/*

  String
  Boolean
  Number
  Araay
  Any

*/

let nome: string= "Eduardo";
let isChecked: boolean = true;
let idade: number = 10;

let nomeCompleto: string;

nomeCompleto = nome;

[12,21,13,32]

let numeros: number[] = []
numeros.push(1,2,3)


function soma(n1:number, n2:number):string{
  return `Soma: {${n1} + ${n2}}`
}

function soma2(n1:number, n2?:number){
  if(!n2){
    return 0
  }
  return n1 + n2
}


/*
  ****************************************************
  Tipagem de objetos
*/

type PessoaType = {
  nome:string;
  idade:number;
  cidade:string
}

const pessoa = {
  nome: "Eduardo",
  idade: 30,
  cidade: "mogi"
}

function printarDados(pessoa:PessoaType){
  console.log(pessoa.nome)
}

printarDados({
  nome: "Eduardo",
  idade: 30,
  cidade: "mogi"
})


/*
  ****************************************************
  Union Type
*/

let valor: number | string | undefined

valor = document.getElementById("valor")?.innerHTML

let valor1: number | string

valor1 = document.getElementById("valor")?.innerHTML!
// forma não muito utilizada colocar o innerHtml !

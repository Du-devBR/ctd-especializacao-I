type CardsProps = {
  nome: string;
  idade: number;
}

export function Card({nome, idade}:CardsProps){
  return(
    <div>
      <p>{nome}</p>
      <p>{idade}</p>
    </div>
  )
}

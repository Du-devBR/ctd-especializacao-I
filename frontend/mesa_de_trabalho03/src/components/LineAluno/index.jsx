import React from 'react';
import './style.sass';

export function LineAluno(props){

  const {data, index} = props
  return (
    <tr>
      <td>{index+1}</td>
      <td>{data.nome}</td>
      <td>{data.matricula}</td>
      <td>{data.curso}</td>
      <td>{data.bimestre}</td>
      <td>deletar</td>
    </tr>
  );
};

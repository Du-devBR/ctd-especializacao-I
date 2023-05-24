import React from 'react';
import './style.sass';

export function LineAluno(props){

  const {data, index, onEdit} = props
  return (
    <tr>
      <td>{index+1}</td>
      <td>{data.nome}</td>
      <td>{data.matricula}</td>
      <td>{data.curso}</td>
      <td>{data.bimestre}</td>
      <td>
        <button
          onClick={() => onEdit(data)}
          >
            Editar
        </button>
        <button>Deletar</button>
      </td>
    </tr>
  );
};

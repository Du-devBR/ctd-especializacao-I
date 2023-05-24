import React from 'react';
import './style.sass';
import { ApiDataAluno } from '../../hooks/useApiData';
import { LineAluno } from '../LineAluno';

export function Table(){

  const {alunoData, isFetching, error} = ApiDataAluno()


  if(isFetching){
    <h3>....carregando</h3>
  }

  return (
    <div className='container-table'>
      <h2>Aluno cadastrados</h2>
      <table className='table-alunos'>
        <tr className='thead-list'>
          <th>Ordem</th>
          <th>Nome</th>
          <th>Matricula</th>
          <th>Curso</th>
          <th>Bimestre</th>
          <th>Ações</th>
        </tr>
        <tbody className="ul-alunos">
          {
            alunoData?.map((aluno, index) => (
              <LineAluno
                key={aluno._id}
                data={aluno}
                index={index}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

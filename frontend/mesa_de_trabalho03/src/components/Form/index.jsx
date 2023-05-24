import React, { useState } from 'react';
import './style.sass';
import { ApiData, ApiDataAluno } from '../../hooks/useApiData';

export function Form(props){

  const {formData, setFormData} = props
  const {cursosData, isFetching, error} = ApiData()
  const {alunoData, save, edit} = ApiDataAluno()

  if(isFetching){
    <h3>....carregando</h3>
  }

  if(error){
    <h3>erro ao processar</h3>
  }

  return (
    <div className='container-form'>
      <h1>Diario eletrônico</h1>
      <div className="form">
        <input
          value={formData.nome}
          onChange={(event) => setFormData({...formData, nome: event.target.value})}
          type="text"
          placeholder='Nome'
        />
        <input
          value={formData.matricula}
          onChange={(event) => setFormData({...formData, matricula: event.target.value})}
          type="text"
          placeholder='Nome'
        />
        <select name="" id="" onChange={(event) => setFormData({...formData, curso: event.target.value})}>
          {
            cursosData?.cursos.map((curso) => (
              <option
                key={curso.id}
                value={curso.name}
                  >
                    {curso.name}
              </option>
            ))
          }
        </select>
        <input
          value={formData.bimestre}
          onChange={(event) => setFormData({...formData, bimestre: event.target.value})}
          type="text"
          placeholder='Nome'
        />
        <button onClick={() => formData.id ? edit((
                  {
                    id: formData.id,
                    nome: formData.nome,
                    matricula: formData.matricula,
                    curso: formData.curso,
                    bimestre: formData.bimestre
                  }
                )) : save(
                  {
                    nome: formData.nome,
                    matricula: formData.matricula,
                    curso: formData.curso,
                    bimestre: formData.bimestre
                  }
                )}>salvar</button>
      </div>
    </div>
  );
};

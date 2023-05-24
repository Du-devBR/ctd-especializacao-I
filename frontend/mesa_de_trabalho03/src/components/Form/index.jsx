import React, { useState } from 'react';
import './style.sass';
import { ApiData } from '../../hooks/useApiData';

export function Form(props){

  const {formData, setFormData} = props
  const {cursosData, isFetching, error} = ApiData()

  function submitNewRegister(){
    const dados =  {
      nome: formData.name,
      matricula: formData.register,
      curso: formData.course,
      bimestre: formData.bimester

    }

    console.log(dados)
  }



  if(isFetching){
    <h3>....carregando</h3>
  }

  if(error){
    <h3>erro ao processar</h3>
  }

  return (
    <div className='container-form'>
      <h1>Diario eletrônico</h1>
      <input
        value={formData.name}
        onChange={(event) => setFormData({...formData, name: event.target.value})}
        type="text"
        placeholder='Nome'
      />
      <input
        value={formData.register}
        onChange={(event) => setFormData({...formData, register: event.target.value})}
        type="text"
        placeholder='Nome'
      />
      <select name="" id="" onChange={(event) => setFormData({...formData, course: event.target.value})}>
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
        value={formData.bimester}
        onChange={(event) => setFormData({...formData, bimester: event.target.value})}
        type="text"
        placeholder='Nome'
      />
      <button
      onClick={submitNewRegister}
        type="submit"
          >
            Salvar
      </button>
    </div>
  );
};

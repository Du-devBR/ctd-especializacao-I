import React, { useState } from 'react';
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

  function clearFields(){
    setFormData({
      id: "",
      nome: "",
      matricula: "",
      curso: "",
      bimestre: "",
    })
  }
  return (
    <div className=''>
      <div className="flex justify-between gap-8">
        <input
          className='w-full pt-3 pb-3 p-4 rounded-md text-lg text-colorInput'
          value={formData.nome}
          onChange={(event) => setFormData({...formData, nome: event.target.value})}
          type="text"
          placeholder='Nome'
        />
        <input
          className='w-full pt-3 pb-3 p-4 rounded-md text-lg text-colorInput'
          value={formData.matricula}
          onChange={(event) => setFormData({...formData, matricula: event.target.value})}
          type="text"
          placeholder='Matricula'
        />
        <select
          className='w-full pt-3 pb-3 p-4 rounded-md text-lg text-colorInput'
          name=""
          id=""
          onChange={(event) => setFormData({...formData, curso: event.target.value})}>
            <option value="">Selecione um curso</option>
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
          className='w-full pt-3 pb-3 p-4 rounded-md text-lg text-colorInput'
          value={formData.bimestre}
          onChange={(event) => setFormData({...formData, bimestre: event.target.value})}
          type="text"
          placeholder='Bimestre'
        />
        <button
          className='pt-3 pb-3 p-16 rounded-md text-lg text-colorTxt bg-bgBtn hover:bg-bgBtnHover transition duration-500'
          onClick={
            () =>
              {
                if(formData.id){
                  edit(
                        {
                          id: formData.id,
                          nome: formData.nome,
                          matricula: formData.matricula,
                          curso: formData.curso,
                          bimestre: formData.bimestre
                        }
                      )
                }else{
                  save(
                        {
                          nome: formData.nome,
                          matricula: formData.matricula,
                          curso: formData.curso,
                          bimestre: formData.bimestre
                        }
                      )
                    }
                    clearFields()
                  }
                }
                >
                  Salvar
          </button>
      </div>
    </div>
  );
};

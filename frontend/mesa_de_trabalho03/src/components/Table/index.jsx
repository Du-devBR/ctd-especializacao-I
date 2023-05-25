import React, { useEffect, useState } from 'react';
import { ApiDataAluno } from '../../hooks/useApiData';
import { LineAluno } from '../LineAluno';
import BounceLoader from 'react-spinners/BounceLoader'

export function Table(props){

  const {alunoData, isFetching, error, edit, deleteId} = ApiDataAluno()
  const {formData, setFormData} = props
  const [count, setCount] = useState(0)

  function getFieldsForEdit(aluno){
    setFormData({...aluno, id: aluno._id})
  }

  useEffect(() => {
    setCount(alunoData?.length)
  }, [alunoData])

  if(isFetching){
    return(
      <BounceLoader
        color={"#e84118"}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    )
  }

  return (
    <div className='font-poppins'>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl text-colorTxt'>Aluno cadastrados</h2>
        <span className='text-colorTxt text-xl'>Total de alunos: {count} </span>
      </div>
      <table className='my-8 min-w-full text-colorTxt'>
        <thead>
          <tr className='border-y mb-4'>
            <th className='py-2 text-center font-semibold'>Ordem</th>
            <th className='py-2 text-center font-semibold'>Nome</th>
            <th className='py-2 text-center font-semibold'>Matricula</th>
            <th className='py-2 text-center font-semibold'>Curso</th>
            <th className='py-2 text-center font-semibold'>Bimestre</th>
            <th className='py-2 text-center font-semibold'>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            alunoData?.map((aluno, index) => (
              <LineAluno
                key={aluno._id}
                data={aluno}
                index={index}
                onEdit={() => getFieldsForEdit(aluno)}
                onDelete={() => deleteId(aluno._id)}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

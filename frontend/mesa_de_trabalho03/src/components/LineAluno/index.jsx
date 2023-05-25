import React from 'react';
import {FiEdit, FiTrash2} from 'react-icons/fi'

export function LineAluno(props){

  const {data, index, onEdit, onDelete} = props
  return (
    <tr className='border-b border-b-gray-500 font-light text-center items-center'>
      <td className='py-2 text-center'>{index+1}</td>
      <td className='py-2 text-center'>{data.nome}</td>
      <td className='py-2 text-center'>{data.matricula}</td>
      <td className='py-2 text-center'>{data.curso}</td>
      <td className='py-2 text-center'>{data.bimestre}</td>
      <td className='py-2 flex justify-center gap-2'>
        <button
          onClick={() => onEdit(data)}
          >
            <FiEdit className='text-sucess w-6 h-6' />
        </button>
        <button
          onClick={() => onDelete(data.id)}
          >
            <FiTrash2 className='text-danger w-6 h-6' />
        </button>
      </td>
    </tr>
  );
};

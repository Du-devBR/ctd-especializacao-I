import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { formatDate } from '../../services/formatDate';
import './style.sass'

export function CardTask(props){

  const formattedDate = formatDate
  return (
    <div className="container-card">
      <div className='card-task'>
        <div className='info-task'>
          <h2>{props.data.title}</h2>
          <h3>Categoria</h3>
          <p>{props.data.description}</p>
        </div>
        <div className="crud-task">
          <span>{formattedDate(props.data.date)}</span>
          <div className="icons">
            <span><FiEdit style={{color: "0FBA3F", width: "24px", height: "24px"}} /></span>
            <span><FiTrash2 style={{color: "F90000", width: "24px", height: "24px"}} /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

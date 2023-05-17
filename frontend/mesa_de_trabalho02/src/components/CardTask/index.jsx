import React from 'react';
import './style.sass'

export function CardTask(){
  return (
    <div className="container-card">
      <div className='card-task'>
        <div className='info-task'>
          <h2>Tarefa 1</h2>
          <h3>Categoria</h3>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, quae.</p>
      </div>
      <div className="crud-task">
        <span>25/01/2023</span>
      </div>
    </div>
  );
};

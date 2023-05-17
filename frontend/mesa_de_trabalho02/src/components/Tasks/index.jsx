import React from 'react';
import './style.sass'
import { CardTask } from '../CardTask';

export function Tasks(){
  return (
    <div className='container-tasks'>
      <h1>Minhas Tarefas</h1>
      <CardTask />
    </div>
  );
};

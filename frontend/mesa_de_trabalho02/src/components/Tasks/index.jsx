// import React, { useEffect, useState } from 'react';
import './style.sass'
import { CardTask } from '../CardTask';
import RotateLoader from 'react-spinners/RotateLoader'
import { todo } from '../../hooks/useTodo';

export default function Tasks(){

  const {todos, isFetching, error} = todo()

  if(isFetching){
    return(
      <RotateLoader
        color={"#e84118"}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    )
  }

  if(error){
    return(
      <h3>Erro ao buscar as tarefas!!!</h3>
    )
  }

  return (
    <div className='container-tasks'>
      <h1>Minhas Tarefas</h1>
      <div className="list-tasks">
        {
          todos.map((task) => (
            <CardTask
              key={task._id}
              data={task}
            />
          ))
        }
      </div>
    </div>
  );
};

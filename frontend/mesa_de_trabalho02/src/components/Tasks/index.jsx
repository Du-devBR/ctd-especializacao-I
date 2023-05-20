// import React, { useEffect, useState } from 'react';
import './style.sass'
import { CardTask } from '../CardTask';
import RotateLoader from 'react-spinners/RotateLoader'
import { todo } from '../../hooks/useTodo';
import { useContext } from 'react';
import SelectedTaskContext from '../../contexts/editTaskContext';

export default function Tasks(){

  const {todos, isFetching, error, deleteTaskId} = todo()
  const {setTaskToEdit} = useContext(SelectedTaskContext)

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
              onEdit={() => setTaskToEdit(task)}
              onDelete={() => deleteTaskId(task._id)}
            />
          ))
        }
      </div>
    </div>
  );
};

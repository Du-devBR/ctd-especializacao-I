// import React, { useEffect, useState } from 'react';
import './style.sass'
import { CardTask } from '../CardTask';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getListTasks } from '../../services/crud';

import RotateLoader from 'react-spinners/RotateLoader'

export default function Tasks(){
  const queryClient = useQueryClient()

  const { data, isFetching, error } = useQuery(["@todos"], getListTasks, {
    refetchOnWindowFocus: false,
  });

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
      <h3>Erro ao buscar os dados!!!</h3>
    )
  }

  console.log(data)

  return (
    <div className='container-tasks'>
      <h1>Minhas Tarefas</h1>
      <div className="list-tasks">
        {
          data.map((task) => (
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

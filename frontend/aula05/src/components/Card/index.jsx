import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getTasks, addTodo } from '../../requests/todos';

export function Card(){

  // const [todos, setTodos] = useState([])
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(false)

  // useEffect(async() => {
  //   getApiTodos()
  // }, [])


  // async function getApiTodos(){
  //   try {
  //     setLoading(true)
  //     const {data} = await getTodos()
  //     setTodos(data)

  //   } catch (error) {
  //     setError(false)

  //   }finally{
  //     setLoading(false)
  //   }
  // }

  const queryClient = useQueryClient()

  const {data, isFetching, error} = useQuery(["@todos"], getTasks, {
    refetchOnWindowFocus: false
  })

  if(isFetching){
    return(<h3>...carregando</h3>)
  }

  if(error){
    return(<h3>...Erro ao buscar dados</h3>)
  }

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};

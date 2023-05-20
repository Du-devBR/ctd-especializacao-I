import React, { useContext, useEffect, useState } from 'react';
import './styles.sass'
import { todo } from '../../hooks/useTodo';
import SelectedTaskContext from '../../contexts/editTaskContext';
import { formatDate } from '../../services/formatDate';

export function Forms(){
  const {saveTask, editTaskId} = todo()

  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [id, setId] = useState(null)

  const {selectedTask} = useContext(SelectedTaskContext)

  useEffect(() => {
    if(selectedTask){
      const dateFormated = selectedTask.date.split("T")[0]
      setId(selectedTask._id)
      setTitle(selectedTask.title)
      setDate(dateFormated)
      setDescription(selectedTask.description)
    }
  }, [selectedTask])


  function clearFields(){
    setTitle("")
      setDate("")
      setDescription("")
  }

  return (
    <div className='form'>
      <h1>Cadastar Tarefa</h1>
      <div className="input-title">
        <label htmlFor="">Titulo</label>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
        />
      </div>
      <div className="select-category">
        <label htmlFor="">Categoria</label>
        <select name="" id="">
          <option value=""></option>
          <option value="">task</option>
        </select>
      </div>
      <div className="input-data">
        <label htmlFor="">Data</label>
        <input
          type="date"
          name=""
          id=""
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </div>
      <div className="input-description">
        <label htmlFor="">Decrição</label>
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <button
        className='btn-submit-task'
        onClick={() => {
          if(id){
            editTaskId({ payload: {title, date, description}, id: id})
            setId(null)
          }else{
            saveTask({title, date, description})
          }
          clearFields()
        }}
        >
          Salvar
      </button>
    </div>
  );
};

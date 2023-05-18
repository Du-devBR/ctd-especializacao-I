import React, { useState } from 'react';
import './styles.sass'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addNewTask } from '../../services/crud';

export function Forms(){

  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")

  return (
    <form className='form'>
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
        <input type="text" />
      </div>
      <button className='btn-submit-task'>Salvar</button>
    </form>
  );
};

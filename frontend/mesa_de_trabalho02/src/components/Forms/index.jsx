import React from 'react';
import './styles.sass'

export function Forms(){
  return (
    <form className='form'>
      <h1>Cadastar Tarefa</h1>
      <div className="input-title">
        <label htmlFor="">Titulo</label>
        <input type="text" />
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
        <input type="data" />
      </div>
      <div className="input-description">
        <label htmlFor="">Decrição</label>
        <input type="text" />
      </div>
      <button className='btn-submit-task'>Salvar</button>
    </form>
  );
};

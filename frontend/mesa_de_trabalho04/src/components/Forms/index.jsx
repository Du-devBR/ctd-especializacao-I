import React, { useState } from 'react';
import { wallet } from '../../assets/db/wallet';
export function Forms(){
  const [title, setTitle] = useState("")
  const [data, setData] = useState("")
  const [price, setPrice] = useState("")
  const [type, setType] = useState("")
  const [description, setDescription] = useState("")

  function submitNewWallet(event){
    event.preventDefault()
    const newWallet = {
      title: title,
      data: data,
      price: price,
      type: type,
      description: description,
    }

    wallet(newWallet)
  }


  return (
    <div className='flex flex-col gap-12'>
      <h2 className='text-2xl font-ubuntu text-black '>Preencha os campos abaixos para adicionar um item.</h2>
      <div className='flex flex-col gap-8'>
        <input
          className='w-full px-4 py-3 bg-primaryGray rounded-lg placeholder:text-black text-xl'
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder='Titulo'
        />
        <input
          className='w-full px-4 py-3 bg-primaryGray rounded-lg placeholder:text-black text-xl'
          onChange={(event) => setData(event.target.value)}
          type="date"
          name="" id=""
          placeholder='Data'
        />
        <input
          className='w-full px-4 py-3 bg-primaryGray rounded-lg placeholder:text-black text-xl'
          onChange={(event) => setPrice(event.target.value)}
          type="text"
          placeholder='Valor'
        />
        <select
          onChange={(event) => setType(event.target.value)}
          className='w-full px-4 py-3 bg-primaryGray rounded-lg placeholder:text-black text-xl'
          name=""
          id=""
            >
              <option value="">Tipo</option>
              <option value="buy">Compra</option>
              <option value="sell">Venda</option>
        </select>
        <textarea
          className='w-full px-4 py-3 bg-primaryGray rounded-lg placeholder:text-black text-xl'
          onChange={(event) => setDescription(event.target.value)}
          placeholder='Descrição'
          name="" id="" cols="30" rows="5">
        </textarea>
        <button
          className='px-2 py-3 bg-primaryColor rounded-lg text-white text-xl w-full hover:bg-bgBtnHover duration-700'
          onClick={(event)=> submitNewWallet(event)}
          >
            Salvar
        </button>
      </div>
    </div>
  );
};

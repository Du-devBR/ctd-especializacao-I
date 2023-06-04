import React from 'react';

export function Forms(){
  return (
    <div className='flex flex-col gap-12'>
      <h2 className='text-2xl font-ubuntu text-black '>Preencha os campos abaixos para adicionar um item.</h2>
      <div className='flex flex-col gap-8'>
        <input
          className='w-full px-4 py-3 bg-primaryGray rounded-lg placeholder:text-black text-xl'
          type="text"
          placeholder='Titulo'
        />
        <input
          className='w-full px-4 py-3 bg-primaryGray rounded-lg placeholder:text-black text-xl'
          type="date"
          name="" id=""
          placeholder='Data'
        />
        <input
          className='w-full px-4 py-3 bg-primaryGray rounded-lg placeholder:text-black text-xl'
          type="text"
          placeholder='Valor'
        />
        <select
          className='w-full px-4 py-3 bg-primaryGray rounded-lg placeholder:text-black text-xl'
          name=""
          id=""
            >
              <option value=""></option>
        </select>
        <textarea
          className='w-full px-4 py-3 bg-primaryGray rounded-lg placeholder:text-black text-xl'
          placeholder='Descrição'
          name="" id="" cols="30" rows="5">
        </textarea>
        <button
          className='px-2 py-3 bg-primaryColor rounded-lg text-white text-xl w-full hover:bg-bgBtnHover duration-700'
          >
            Salvar
        </button>
      </div>
    </div>
  );
};

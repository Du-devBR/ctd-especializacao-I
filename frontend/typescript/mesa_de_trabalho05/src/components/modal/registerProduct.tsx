import React, { useState } from 'react';
import ReactModal from "react-modal";
import { ModalType } from "./type";
import {SendProducts } from '../../pages/products/type';
import { ApiDataProducts } from '../../hooks/useDataApi';

export function ModalRegister({isOpen, close}:ModalType){

  const {save} = ApiDataProducts()

  const [formData, setFormData] = useState<SendProducts>({
    title: '',
    company: '',
    price: '',
    urlImg: '',
  })

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: "40px",
      border: "none",
      borderRadius: "12px",
      boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
    },
  };

  // function teste(){
  //   alert(JSON.stringify(formData))
  // }
  return(
    <ReactModal isOpen={isOpen} style={customStyles}>
      <div className='flex flex-col gap-6 min-w-[556px] items-center'>
        <h2 className='text-black font-semibold text-xl'>Cadastrar Produto</h2>
        <input
          className='w-full py-3 px-4 rounded-lg text-black  bg-grayColor border-solid border border-primaryGray placeholder:text-primaryGray'
          type="text"
          value={formData.title}
          onChange={(event) => setFormData({...formData, title: event.target.value})}
          placeholder='Nome do produto'
        />
        <div className='flex w-full gap-6'>
          <input
            className='w-full py-3 px-4 rounded-lg text-black  bg-grayColor border-solid border border-primaryGray placeholder:text-primaryGray'
            type="text"
            value={formData.price}
            onChange={(event) => setFormData({...formData, price: event.target.value})}
            placeholder='Valor do produto'
          />
          <select name="" id=""
            onChange={(event) => setFormData({...formData, company: event.target.value})}
            className='w-full py-3 px-4 rounded-lg text-black  bg-grayColor border-solid border border-primaryGray placeholder:text-primaryGray'
            >
            <option value="">Fornecedor</option>
            <option value="Magalu">Magalu</option>
            <option value="Amazon">Amazon</option>
            <option value="Americanas">Americanas</option>
            <option value="Kabum">Kabum</option>
          </select>
        </div>
        <input
          className='w-full py-3 px-4 rounded-lg text-black  bg-grayColor border-solid border border-primaryGray placeholder:text-primaryGray'
          type="text"
          value={formData.urlImg}
          onChange={(event) => setFormData({...formData, urlImg: event.target.value})}
          placeholder='Url da imagem'
        />

        {/* falta adionar a description no backend */}
        <input
          className='w-full py-3 px-4 rounded-lg text-black  bg-grayColor border-solid border border-primaryGray placeholder:text-primaryGray'
          type="text"
          placeholder='Descrição'
        />
        <div className='flex gap-6 items-center justify-center'>
          <button
            className='flex bg-primaryColor py-2 px-16 border-none rounded-lg text-black font-semibold text-base'
            onClick={async () => {
              try {
                await save(
                  {
                    title: formData.title,
                    company: formData.company,
                    price: formData.price,
                    urlImg: formData.urlImg,
                  }
                )
               close()
              } catch (error){
                console.error(error)
              }
              }
            }
              >
                Salvar
          </button>
          <button
            className='flex bg-white py-2 px-16 border-solid border border-primaryColor rounded-lg text-primaryColor font-semibold text-base'
            onClick={close}
              >
                Cancelar
          </button>
        </div>
      </div>
    </ReactModal>
  )
}

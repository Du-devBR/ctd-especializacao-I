import React, { useState } from 'react';
import { Header } from '../../components/Header';
import ReactModal from "react-modal";

export function MainLayout(){
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className='w-full'>
      <header>
        <Header />
      </header>
      <section className='flex justify-between items-center px-9 py-12 sm:px-24'>
        <h2 className='text-2xl text-black font-ubuntu'>Itens</h2>
        <button
          onClick={()=> setOpenModal(true)}
          className='sm:hidden px-16 py-3 bg-primaryColor rounded-xl text-2xl font-ubuntu text-white'
            >Novo
        </button>
          <ReactModal
            className='w-full h-full flex items-center justify-center px-9 py-8 sidebar'
            isOpen={openModal}
            onRequestClose={!openModal}
            >
              <div className='w-full h-full bg-slate-500 px-9 py-8'>
                <p>ola modal aberto</p>
                <button onClick={() => setOpenModal(false)}>X</button>
              </div>
          </ReactModal>
      </section>
    </div>
  );
};

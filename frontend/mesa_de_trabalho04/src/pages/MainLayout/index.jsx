import React, { useState } from 'react';
import { Header } from '../../components/Header';
import ReactModal from "react-modal";
import { Forms } from '../../components/Forms';
import { Cards } from '../../components/Cards';

export function MainLayout(){
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className='w-full'>
      <header>
        <Header />
      </header>
      <section className='flex gap-9  px-9 py-12 sm:px-24'>
        <div className='w-3/4 hidden sm:flex'>
          <Forms />
        </div>
        <div className='w-full flex flex-col gap-12'>
          <div className='w-full flex items-center justify-between'>
            <h2 className='text-2xl text-black font-ubuntu'>Itens</h2>
            <button
              onClick={()=> setOpenModal(true)}
              className='px-16 py-3 bg-primaryColor rounded-xl text-2xl font-ubuntu text-white sm:hidden'
                >Novo
            </button>
          </div>
          <Cards />
        </div>
        <ReactModal
              className='fixed w-full inset-0  items-center justify-center px-9 py-8 sidebar overflow-x-auto'
              overlayClassName="fixed inset-0 bg-black bg-opacity-50"
              isOpen={openModal}
              onRequestClose={!openModal}
              >
                <div className='flex flex-col w-full bg-white px-9 py-8 rounded-xl items-center gap-8'>
                  <button
                    className='flex bg-primaryColor py-1 px-3 rounded-b-lg  text-white mt-[-32px]'
                    onClick={() => setOpenModal(false)}
                      >
                        X
                  </button>
                  <Forms />
                </div>
            </ReactModal>
      </section>
    </div>
  );
};

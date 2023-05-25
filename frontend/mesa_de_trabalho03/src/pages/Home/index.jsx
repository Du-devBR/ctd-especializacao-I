import React, { useState } from 'react';
import { Form } from '../../components/Form';
import { Table } from '../../components/Table';
import { ToastContainer } from "react-toastify";

export function Home(){

  const [formData, setFormData] = useState({
    id: "",
    nome: "",
    regitro: "",
    curso: "",
    bimestre: ""
  })

  return (
    <div className='flex flex-col gap-10 w-100% h-[100vh] pt-12 pr-16 pl-16 pb-12 bg-background'>
      <h1 className='text-colorTxt text-2xl font-bold'>Diario eletrônico</h1>
      <Form
        formData={formData}
        setFormData={setFormData}
      />
      <Table
        formData={formData}
        setFormData={setFormData}
      />
      <ToastContainer />
    </div>
  );
};

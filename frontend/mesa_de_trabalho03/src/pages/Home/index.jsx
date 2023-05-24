import React, { useState } from 'react';
import './style.sass';
import { Form } from '../../components/Form';
import { Table } from '../../components/Table';

export function Home(){

  const [formData, setFormData] = useState({
    id: "",
    nome: "",
    regitro: "",
    curso: "",
    bimestre: ""
  })

  return (
    <div>
      <Form
        formData={formData}
        setFormData={setFormData}
      />
      <Table
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

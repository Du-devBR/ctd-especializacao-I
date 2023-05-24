import React, { useState } from 'react';
import './style.sass';
import { Form } from '../../components/Form';

export function Home(){

  const [formData, setFormData] = useState({
    id:"",
    name:"",
    register:"",
    course:"",
    bimester:""
  })

  return (
    <div>
      <Form
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

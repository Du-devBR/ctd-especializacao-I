import React from 'react';
import './style.sass'
import { Forms } from '../../components/Forms';
import { Task } from '../../components/Task';

export function Home(){
  return (
    <div className='container'>
      <section className='container-forms'>
        <Forms />
      </section>
      <section className='container-tasks'>
        <Task />
      </section>
    </div>
  );
};

import React from 'react';
import './style.sass'
import { Forms } from '../../components/Forms';
import  Tasks  from '../../components/Tasks';

export function Home(){
  return (
    <div className='container'>
      <section className='container-section-forms'>
        <Forms />
      </section>
      <section className='container-section-tasks'>
        <Tasks />
      </section>
    </div>
  );
};

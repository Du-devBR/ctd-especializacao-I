import React, { useEffect, useState } from 'react';

export function Cards(props){
  return (
    <div className={`${props.data.type === 'buy' ? 'bg-sucess' : 'bg-danger'} w-full flex flex-col rounded-lg py-4 px-8 gap-2`}>
      <div className='flex justify-between items-center'>
        <h2 className='text-black text-xl font-ubuntu font-bold'>{props.data.title}</h2>
        <span className='text-black text-xl font-ubuntu font-bold'>{props.data.price}</span>
      </div>
      <div className='flex justify-between items-end'>
        <p className='text-black text-xl font-ubuntu font-light'>{props.data.description}</p>
        <span className='text-black text-xl font-ubuntu font-light'>{props.data.data}</span>
      </div>
    </div>
  );
};

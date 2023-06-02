import React, { useState } from 'react';
import hamburg from "../../assets/img/hamburgIcon.svg"

export function Header(){

  const [toogle, setToggle] = useState(false)

  return (
    <div className='flex justify-between w-full bg-primaryColor items-center px-9 py-12 sm:px-24'>
      <h1 className='font-ubuntu font-normal text-3xl text-white'>DigiWallet</h1>
      <ul className='hidden gap-4 sm:flex'>
        <li className='font-ubuntu font-normal text-xl text-white'>Home</li>
        <li className='font-ubuntu font-normal text-xl text-white'>Sobre</li>
      </ul>
      <img
        onClick={()=> setToggle(!toogle)}
        src={hamburg}
        alt=""
        className='sm:hidden cursor-pointer w-6 h-6 z-10'
      />
      <ul className={`${toogle ? "flex" : "hidden"} flex-col px-9 py-4 absolute text-end  right-0 gap-2 bg-primaryColor w-full mt-[228px] sidebar`}>
        <li className='font-ubuntu font-normal text-xl text-white'>Home</li>
        <li className='font-ubuntu font-normal text-xl text-white '>Sobre</li>
      </ul>
    </div>
  );
};

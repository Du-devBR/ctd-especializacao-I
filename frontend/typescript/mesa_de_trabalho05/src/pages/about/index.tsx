import { Link } from "react-router-dom";

import {BsFacebook, BsLinkedin} from 'react-icons/bs';

export function About(){
  return(
    <div className="flex w-full h-screen">
      <div className="flex items-center justify-center bg-primaryColor w-[30%]">
        <p className="text-black text-4xl font-semibold">Quem somos</p>
      </div>
      <div className="flex flex-col justify-between py-16 px-16 w-full">
        <h1 className="text-black text-xl font-semibold ">Quem somos</h1>
        <div className="flex flex-col gap-9 items-center">
          <p className="text-black text-xl font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae enim hendrerit, accumsan dolor ac, tincidunt nunc. Nunc non commodo nisi. Pellentesque a rhoncus lorem. Nam ac convallis orci, posuere dictum est. Donec dapibus imperdiet pharetra. Nam eu odio at metus semper efficitur eu ac nisi. Vivamus cursus risus mauris, sed molestie mi hendrerit a. </p>
          <p className="text-black text-xl font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae enim hendrerit, accumsan dolor ac, tincidunt nunc. Nunc non commodo nisi. Pellentesque a rhoncus lorem. Nam ac convallis orci, posuere dictum est. Donec dapibus imperdiet pharetra. Nam eu odio at metus semper efficitur eu ac nisi. Vivamus cursus risus mauris, sed molestie mi hendrerit a. </p>
        </div>
        <Link to={'/produtos'} className="text-black text-xl font-medium self-center">Clique aqui para voltar a página inicial</Link>
        <ul className="flex self-center items-center gap-8">
          <li>
            <a href="https://www.facebook.com"><BsFacebook style={{ width: '50px', fontSize: '50px' }}/></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/eduardo-ananias-29a53048/"><BsLinkedin style={{ width: '50px', fontSize: '50px' }} /></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

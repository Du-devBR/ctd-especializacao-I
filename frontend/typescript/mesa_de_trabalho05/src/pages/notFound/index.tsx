import { Link } from "react-router-dom";
import {BsFacebook, BsLinkedin} from 'react-icons/bs';

export function NotFound(){
  return(
    <div className="flex w-full h-screen">
      <div className="flex items-center justify-center bg-primaryColor w-[30%]">
        <p className="text-black text-4xl font-semibold">Ooooopss</p>
      </div>
      <div className="flex flex-col justify-between py-16 px-16 w-full items-center">
        <h1 className="text-black text-xl font-semibold ">Pagina não encontrada</h1>
        <div className="flex flex-col gap-9 items-center">
          <p className="text-black text-xl font-light">Não encontramos essa página em nosso sistema. Verifique se voceê inseriu a url corretamente.</p>
          <Link to={'/produtos'} className="text-black text-xl font-medium">Clique aqui para voltar a página inicial</Link>
        </div>
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

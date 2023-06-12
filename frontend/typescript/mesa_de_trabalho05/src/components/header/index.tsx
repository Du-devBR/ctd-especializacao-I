import { Link } from "react-router-dom";

export function Header(){
  return(
    <header className="flex justify-between items-center py-5 px-12 bg-primaryColor ">
      <h1 className="flex text-txtBlackColor text-xl font-bold">DHProducts</h1>
      <div className="flex items-center gap-11 ">
        <ul className="flex gap-11 text-txtBlackColor text-xl cursor-pointer">
          <Link to={"/produtos"}>Produtos</Link>
          <Link to={"/sobre"}>Quem somos</Link>
        </ul>
        <button className="text-txtBlackColor text-xl cursor-pointer hover:rounded-xl hover:bg-white duration-700 px-6 py-1">Sair</button>
      </div>
    </header>
  )
}

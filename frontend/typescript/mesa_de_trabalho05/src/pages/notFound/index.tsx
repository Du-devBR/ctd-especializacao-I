export function NotFound(){
  return(
    <div className="flex w-full h-screen">
      <div className="flex items-center justify-center bg-primaryColor w-[30%]">
        <p className="text-black text-4xl font-semibold">Ooooopss</p>
      </div>
      <div className="flex flex-col justify-between py-16 px-16 w-full">
        <h1 className="text-black text-xl font-semibold ">Pagina não encontrada</h1>
        <div className="flex flex-col gap-9 items-center">
          <p className="text-black text-xl font-light">Não encontramos essa página em nosso sistema. Verifique se voceê inseriu a url corretamente.</p>
          <p className="text-black text-xl font-medium">Clique aqui para voltar a página inicial</p>
        </div>
        <ul className="flex self-center">
          <li>Linkedn</li>
          <li>Facebook</li>
        </ul>
      </div>
    </div>
  )
}

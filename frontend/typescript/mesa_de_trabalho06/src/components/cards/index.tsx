export function Card(){
  return(
    <div className="w-full flex justify-between py-5 px-4 rounded-xl shadow-xl">
      <div className="flex flex-col">
        <h2 className="text-txtBlackColor font-semibold text-xl">Tarefa2</h2>
        <span className="text-txtBlackColor font-light text-sm mt-0 mb-2">Categoria</span>
        <p className="text-txtBlackColor text-base font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nobis.</p>
      </div>
      <div className="flex flex-col justify-between items-end">
        <span className="text-txtBlackColor font-semibold text-xl">25/12/2010</span>
        <button>X</button>
      </div>
    </div>
  )
}

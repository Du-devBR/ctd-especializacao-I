import { ResponseProducts } from "../../pages/products/type";

export function Card({title, company, price, urlImg, onClick}:ResponseProducts){
  return(
    <div
      className="flex cursor-pointer flex-col justify-between shadow-md shadow-gray-300 max-w-xs gap-4 px-4 py-4 rounded-xl"
      onClick={onClick}
        >
      <h3 className="text-base font-semibold text-black">{title}</h3>
      <img className="flex max-h-[220px]" src={urlImg} alt="" />
      <div className="flex flex-col">
        <span className="text-sm font-light to-black">{company}</span>
        <span className="text-2xl font-light to-black">{`R$ ${price}`}</span>
      </div>
    </div>
  )
}

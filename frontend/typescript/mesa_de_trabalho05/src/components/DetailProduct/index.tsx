import { useParams } from "react-router-dom"
import { ApiDataProductId } from "../../hooks/useDataApi"
import { ModalDelete } from "../modal/deleteProduct"
import { UseModal } from "../../hooks/useModal"
import { ModalUpdate } from "../modal/updateProduct"


export function DetailProduct(){

  const {_id} = useParams<{_id: string}>()
  const {openModal, openModalUpdate, closedModal, closedModalUpdate} = UseModal()

  const {productData, isFetching, error} = ApiDataProductId(_id ?? '')

  return(
    <div className="flex justify-between gap-6 w-full h-full">
      <ModalDelete isOpen={openModal} close={closedModal} isOpenUpdate  />
      <ModalUpdate isOpenUpdate={openModalUpdate} close={closedModalUpdate} isOpen />
      <img className="flex max-w-[350px]" src={productData?.urlImg} alt="" />
      <div className="flex flex-col">
        <h2 className=" text-black font-semibold text-xl">{productData?.title}</h2>
        <span className="text-black font-light text-sm mt-1 mb-9">{productData?._id}</span>
        <span className="text-black text-2xl font-semibold">{`R$ ${productData?.price}`}</span>
        <p className=" text-black text-base font-light mt-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Alias porro dolor delectus illo sequi eligendi expedita, sunt tenetur!
          Inventore debitis suscipit nesciunt nemo non rerum nostrum provident quod,
          eum quisquam?
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={closedModalUpdate}
          className="flex w-10 h-10 rounded-full bg-none border-2 border-primaryColor shadow-md shadow-gray-300 items-center justify-center"
            >
              +
        </button>
        <button
          onClick={closedModal}
          className="flex w-10 h-10 rounded-full bg-primaryColor border-none shadow-md shadow-gray-300 items-center  justify-center">-</button>
      </div>
    </div>
  )
}

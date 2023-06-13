import ReactModal from "react-modal";
import { ResponseProducts } from "../../pages/products/type";
import React, { useState } from 'react';
import { ModalType } from "./type";

export function ModalUpdate({isOpen,isOpenUpdate, close}: ModalType){

  const [formData, setFormData] = useState<ResponseProducts>({
    title: '',
    company: '',
    price: '',
    urlImg: '',
  })

  return(
    <ReactModal isOpen={isOpenUpdate}>
      testeffffff
      <button onClick={close}>cancelar</button>
    </ReactModal>
  )

}

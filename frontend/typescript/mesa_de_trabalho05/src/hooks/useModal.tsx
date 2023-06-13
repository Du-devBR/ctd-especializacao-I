import { useState } from "react";
export function UseModal(){

  const [openModal, setOpenModal] = useState(false)
  const [openModalUpdate, setOpenModalUpdate] = useState(false)

  const closedModal = () => {
    setOpenModal(!openModal)
  }

  const closedModalUpdate = () => {
    setOpenModalUpdate(!openModalUpdate)
  }
  return {
    openModal,
    openModalUpdate,
    closedModal,
    closedModalUpdate
  }
}

import { useState } from "react";
export function UseModal(){

  const [openModal, setOpenModal] = useState(false)

  const closedModal = () => {
    setOpenModal(!openModal)
  }

  return {
    openModal,
    closedModal
  }
}

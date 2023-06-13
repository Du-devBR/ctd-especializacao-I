import ReactModal from "react-modal";
import { ModalType } from "./type";
import { useParams } from "react-router-dom";
import { ApiDataProductId } from "../../hooks/useDataApi";
import { useNavigate } from "react-router-dom";

export function ModalDelete({isOpen, close}: ModalType){

  const {_id} = useParams<{_id: string}>()
  const {deleteId, error} = ApiDataProductId(_id ?? '')
  const navigate = useNavigate()

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: "40px",
      border: "none",
      borderRadius: "12px",
      boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
    },
  };

  const returnProducts = (_id:string):void => {
    deleteId(_id)

    if(!error){
      navigate('/produtos')
    }

  }
  return(
    <ReactModal isOpen={isOpen} style={customStyles}>
      <div className="flex flex-col gap-10 items-center">
        <h2 className="text-black text-xl font-semibold">Excluir Produto</h2>
        <p className="text-black text-xl font-regular">Deseja realmente excluir o item?</p>
        <div className="flex gap-4">
          <button
            onClick={()=> returnProducts(_id)}
            className='flex bg-primaryColor py-2 px-16 border-none rounded-lg text-black font-semibold text-base'
              >
                Sim
          </button>
          <button
            className='flex bg-white py-2 px-16 border-solid border border-primaryColor rounded-lg text-primaryColor font-semibold text-base'
            onClick={close}
              >
                Cancelar
          </button>
        </div>
      </div>
    </ReactModal>
  )
}

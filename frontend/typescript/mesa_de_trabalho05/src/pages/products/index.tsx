
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/card";
import { ApiDataProducts } from "../../hooks/useDataApi";
import { ModalRegister } from "../../components/modal/registerProduct";
import { UseModal } from "../../hooks/useModal";

export function Products(){

  const {productsData, isFetching, error} = ApiDataProducts()
  const {openModal, closedModal} = UseModal()
  const navigate = useNavigate()

  if(error){
    navigate("/notfound")
    return null;
  }

  const selectProductId = (_id: string) => {
    navigate(`/produto/${_id}`);
  };


  return(
    <div>
      <ModalRegister isOpen={openModal} close={closedModal} isOpenUpdate/>
      <h2 className="flex text-xl text-txtBlackColor2 font-bold mb-4">Produtos</h2>
      {isFetching ? (
        <h3>...carregando</h3>
      ) : (
        <div className="grid grid-cols-4 gap-4 relative">
          {productsData?.map((product) => (
            <Card
              key={product._id}
              _id={product._id}
              title={product.title}
              company={product.company}
              price={product.price}
              urlImg={product.urlImg}
              onClick={() => selectProductId(product._id)}
            />
          ))}
          <button
            onClick={closedModal}
            className="flex text-3xl font-bold rounded-[100%] bg-primaryColor w-[80px] h-[80px] items-center justify-center self-end mb-[-40px] ml-[-40px]"
              >
                +
          </button>
        </div>
      )}
    </div>
  )
}

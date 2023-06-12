
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/card";
import { ApiDataProducts } from "../../hooks/useDataApi";
import ReactModal from 'react-modal';
import { useState } from "react";

export function Products(){

  const {productsData, isFetching, error} = ApiDataProducts()

  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate()

  if(error){
    navigate("/notfound")
    return null;
  }

  const selectProductId = (_id: string) => {
    navigate(`/produto/${_id}`);
  };

  function teste(){
    setOpenModal(true)
  }

  return(
    <div>
      <ReactModal isOpen={openModal}>
        <h1>ddd</h1>
      </ReactModal>
      <h2 className="flex text-xl text-txtBlackColor2 font-bold mb-4">Produtos</h2>
      {isFetching ? (
        <h3>...carregando</h3>
      ) : (
        <div className="flex gap-8 max-w-fit relative">
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
            onClick={teste}
            className="flex text-3xl font-bold rounded-[100%] bg-primaryColor w-[80px] h-[80px] items-center justify-center absolute bottom-[-40px] right-[-40px]"
              >
                +
          </button>
        </div>
      )}
    </div>
  )
}

import './modal-product.scss';
import { numberFormater } from "../../../../utils/numberFormater";
import close from "../../../../assets/close.svg";
import minus from "../../../../assets/minus.svg";
import plus from "../../../../assets/plus.svg";
import { useState } from 'react';


export interface ImodalProductProps {
  closeModal: () => void,
  product: {
    productName: string,
    descriptionShort: string,
    photo: string,
    price: number   
  }
}


export const ModalProduct = ({product, closeModal}: ImodalProductProps) => {
  const {productName, descriptionShort, photo, price} = product
  const [quantityValue, setQuantityValue] = useState(1);

  const increaseQuantity = () => {
    setQuantityValue(value => value + 1)
  }

  const decreaseQuantity = () => {
    if (quantityValue > 0) {
      setQuantityValue(value => value - 1)
    }
  }

  return ( 
    <div className="modal-background" onClick={closeModal}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <button className='close-button'>
          <img onClick={closeModal} src={close} alt="botão de fechar" />
        </button>
        <img className='modal-image' src={photo} alt={descriptionShort}/>
        <div className='modal-content'>
          <h3 className='modal-content-title'>{productName}</h3>
          <span className='modal-content-price'>R$ {numberFormater(price * 0.90)}</span>
          <p className='modal-content-description'>Many desktop publishing packages and web page editors now many desktop publishing</p>
          <span className='modal-content-detail'>{`Veja mais detalhes do produto >`}</span>
            <div className='modal-buttons'>
              <div className='modal-button-quantity'>
                <button className='' onClick={decreaseQuantity} disabled={quantityValue === 0}>
                  <img src={minus} alt="diminuir quantidade de items" />
                </button>
                <input type="number" step="0.01" name="" id="" value={quantityValue}/>
                <button onClick={increaseQuantity}>
                  <img src={plus} alt="aumentar quantidade de items" />
                </button>
              </div>
              <button  className='modal-buy-button'>Comprar</button>
            </div>
        </div>
        
      </div>
    </div>
  )
}
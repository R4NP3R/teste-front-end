import { useRef, useState } from 'react';
import './productCarousel.scss'

import arrowLeft from '../../../../assets/arrowLeft.svg'
import arrowRight from '../../../../assets/arrowRight.svg'
import {numberFormater} from '../../../../utils/numberFormater';
import { ModalProduct } from '../modal-product/modal-product';

interface Product {
  productName: string,
  descriptionShort: string,
  photo: string,
  price: number 
}

export interface IProductsCarousel {
  products: Product[];     
}


export const  ProductCarousel = ({products}: IProductsCarousel) => {
  const scrollRef = useRef<HTMLUListElement | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const productModal = useRef<HTMLDivElement>(null);

  const handleSetScroll = (scroll: number) => {
    const currentScrollLeft = scrollRef.current?.scrollLeft || 0;
    scrollRef.current?.scrollTo({behavior: 'smooth', left: (currentScrollLeft + scroll)});
    console.log('clicou')
  };

  function closeModal () {
    setSelectedProduct(null)
  }

  
  return (
    <section className='products-carousel'>
      <button className='carousel-button left' onClick={() => handleSetScroll(-650)}>
        <img src={arrowLeft} alt="" />
      </button>      
      <ul ref={scrollRef} className="product-list">      
      {products.map(product => {
        const {photo, price, productName} = product;
        return (
          <>
            <li key={productName} className="product-list-item">
              <img src={photo} alt={productName} />
              <h4 className='product-list-item-title'>{productName}</h4>
              <span className='product-list-item-price'>R$ {numberFormater(price)}</span>
              <p className='product-list-item-price-discount'>R$ {numberFormater(price * 0.90)}</p>
              <span className='product-list-item-price-installment'>ou 10x de {price / Number(10)} sem juros</span>
              <span className='product-list-item-free-shipping'>Frete grátis</span>
              <button onClick={() => setSelectedProduct(product)} className='product-list-button'><span>Comprar</span></button>
            </li>
            
          </>
        )
      })}       
      </ul>
      <button className='carousel-button right' onClick={() => handleSetScroll(650)}>
        <img src={arrowRight} alt="" />
      </button>
      {selectedProduct && (
      <div ref={productModal}>
            <ModalProduct closeModal={closeModal} product={{
              productName: selectedProduct.productName,
              descriptionShort: selectedProduct.descriptionShort,
              photo: selectedProduct.photo,
              price: selectedProduct.price
            }} />
            </div>
      )}    
    </section>
  )
}
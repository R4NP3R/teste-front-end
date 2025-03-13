import { useRef } from 'react';
import './productCarousel.scss'

import arrowLeft from '../../../../assets/arrowLeft.svg'
import arrowRight from '../../../../assets/arrowRight.svg'

export interface IProductsCarousel {
  products: {  
      productName: string,
      descriptionShort: string,
      photo: string,
      price: number    
  }[];
}


export const  ProductCarousel = ({products}: IProductsCarousel) => {
  const scrollRef = useRef<HTMLUListElement | null>(null);


  const handleSetScroll = (scroll: number) => {
    const currentScrollLeft = scrollRef.current?.scrollLeft || 0;
    scrollRef.current?.scrollTo({behavior: 'smooth', left: (currentScrollLeft + scroll)});
    console.log('clicou')
  };

  
  return (
    <section className='products-carousel'>
      <button className='carousel-button left' onClick={() => handleSetScroll(-550)}>
        <img src={arrowLeft} alt="" />
      </button>      
      <ul ref={scrollRef} className="product-list">      
      {products.map(product => {
        const {photo, price, productName} = product;
        return (
          <li key={productName} className="product-list-item">
            <img src={photo} alt={productName} />
            <h4 className='product-list-item-title'>{productName}</h4>
            <span className='product-list-item-price'>R$ {price.toFixed(2)}</span>
            <p className='product-list-item-price-discount'>R$ {price * 0.90}</p>
            <span className='product-list-item-price-installment'>ou 10x de {price / Number(10)} sem juros</span>
            <span className='product-list-item-free-shipping'>Frete grátis</span>
            <button className='product-list-button'><span>Comprar</span></button>
          </li>
        )
      })}       
      </ul>
      <button className='carousel-button right' onClick={() => handleSetScroll(550)}>
        <img src={arrowRight} alt="" />
      </button>      
    </section>
  )
}
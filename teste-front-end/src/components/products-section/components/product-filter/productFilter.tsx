import { useState } from 'react';
import './productFilter.scss'
interface IProductfilterProps {
  productType: {
    name: string;
  }[]
}

export const ProductFilter = ({productType}: IProductfilterProps) => {
  const [activeProductType, setActiveProductType] = useState('celular')

  return (
    <ul className="product-filter-list">
      {productType.map(product => (
        <li className="product-filter-list-item" key={product.name}>
          <button onClick={() => setActiveProductType(product.name)}
            className={'product-filter-list-item-button '}>
              <span className={`${activeProductType === product.name ? 'active' : ''}`}>
                {product.name}
              </span>
          </button>
        </li>
      ))}      
    </ul>
  )
}
import './productFilter.scss'
interface IProductfilterProps {
  productType: {
    name: string;
  }[]
}

export const ProductFilter = ({productType}: IProductfilterProps) => {

  return (
    <ul className="product-filter-list">
      {productType.map(product => (
        <li className="product-filter-list-item" key={product.name}>
          <button>{product.name}</button>
        </li>
      ))}      
    </ul>
  )
}
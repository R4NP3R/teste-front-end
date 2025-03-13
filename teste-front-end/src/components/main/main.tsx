import './main.scss';

import blackFridayImg from '../../images/Rectangle_250.png';
import { ShopSectionList } from './components/shop-section-list/shopSectionList';
import { ProductsSection } from './components/products-section/productsSection';

export const Main = () => {

  
  return (
    <main>
      <img className='principal-image' src={blackFridayImg} alt="loja de roupas com black friday" />
      <ShopSectionList/>
      <ProductsSection productFilter/>
      <ProductsSection productFilter={false}/>
    </main>
  )
}
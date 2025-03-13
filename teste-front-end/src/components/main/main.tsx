import './main.scss';

import blackFridayImg from '../../images/Rectangle_250.png';
import { ShopSectionList } from './components/shop-section-list/shopSectionList';
import { ProductsSection } from '../products-section/productsSection';
import { BrandsSection } from './components/brands-sections/brandsSection';

export const Main = () => {

  
  return (
    <main>
      <img className='principal-image' src={blackFridayImg} alt="loja de roupas com black friday" />
      <ShopSectionList/>
      <ProductsSection withPartners productFilter/>
      <ProductsSection withPartners productFilter={false}/>
      <BrandsSection/>
      <ProductsSection withPartners={false} productFilter={false}/>
      
    </main>
  )
}
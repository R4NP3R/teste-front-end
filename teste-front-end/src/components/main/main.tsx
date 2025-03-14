import './main.scss';

import blackFridayImg from '../../images/Rectangle_250.png';
import { ShopSectionList } from './components/shop-section-list/shopSectionList';
import { ProductsSection } from '../products-section/productsSection';
import { BrandsSection } from './components/brands-sections/brandsSection';

export const Main = () => {

  
  return (
    <main>
      <div className="principal-image">
        <img className="principal-image-background" src={blackFridayImg} alt="imagem de uma loja de roupas em black friday" />
        <h2 className="principal-image-title">Venha conhecer nossas promoçoes</h2>
        <p className="principal-image-description"><span>50% Off</span> nos produtos</p>
        <button className="principal-image-button">Ver Produto</button>
      </div>
      {/* <img className='principal-image' src={blackFridayImg} alt="loja de roupas com black friday" /> */}
      <ShopSectionList/>
      <ProductsSection withPartners productFilter/>
      <ProductsSection withPartners productFilter={false}/>
      <BrandsSection/>
      <ProductsSection withPartners={false} productFilter={false}/>
      
    </main>
  )
}
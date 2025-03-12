import './main.scss';

import blackFridayImg from '../../images/Rectangle_250.png';

import { SectionTitle } from './components/sectionTitle/sectionTitle';
import { ShopSectionList } from './components/shop-section-list/shopSectionList';
import { ProductFilter } from './components/product-filter/productFilter';


export const Main = () => {
  return (
    <main>
      <img className='principal-image' src={blackFridayImg} alt="loja de roupas com black friday" />
      <ShopSectionList/>
      <section>
        <SectionTitle title='Produtos Relacionados'/>
        <ProductFilter productType={[{name: 'celular'},{name: 'acessórios'},{name: 'tablets'},{name: 'notebooks'},{name: 'tvs'},{name: 'ver todos'}]}/>
      </section>
    </main>
  )
}
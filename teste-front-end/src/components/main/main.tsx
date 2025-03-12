import './main.scss';

import blackFridayImg from '../../images/Rectangle_250.png';

import { SectionTitle } from './components/sectionTitle/sectionTitle';
import { ShopSectionList } from './components/shop-section-list/shopSectionList';


export const Main = () => {
  return (
    <main>
      <img className='principal-image' src={blackFridayImg} alt="loja de roupas com black friday" />
      <ShopSectionList/>
      <section>
        <SectionTitle title='Produtos Relacionados'/>
      </section>
    </main>
  )
}
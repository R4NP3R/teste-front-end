import './shopSectionList.scss'

import computer from '../../../../assets/computer.svg';
import supermercados from '../../../../assets/supermercados.svg';
import whiskey from '../../../../assets/whiskey.svg';
import ferramentas from '../../../../assets/ferramentas.svg';
import cuidadosDeSaude from '../../../../assets/cuidados-de-saude.svg';
import corrida from '../../../../assets/corrida.svg';
import moda from '../../../../assets/moda.svg';


export const ShopSectionList = () => {
  return (
    <ol className='shop-section-list'>        
          <li className='shop-section-list-item'>
            <figcaption className='section-style white-bg'>
              <img src={computer} alt="" />
            </figcaption>
              <p className='active'>Tecnologia</p>
          </li>
          <li className='shop-section-list-item'>
            <figcaption className='section-style'>
              <img src={supermercados} alt="" />
            </figcaption>
              <p>Supermercado</p>
          </li>
          <li className='shop-section-list-item'>
            <figcaption className='section-style'>
              <img src={whiskey} alt="" />
            </figcaption>
              <p>Bebidas</p>
          </li>
          <li className='shop-section-list-item'>
            <figcaption className='section-style'>
              <img src={ferramentas} alt="" />
            </figcaption>
              <p>Ferramentas</p>
          </li>
          <li className='shop-section-list-item'>
            <figcaption className='section-style'>
              <img src={cuidadosDeSaude} alt="" />
            </figcaption>
              <p>Saúde</p>
          </li>
          <li className='shop-section-list-item'>
            <figcaption className='section-style'>
              <img src={corrida} alt="" />
            </figcaption>
              <p>Esportes e Fitness</p>
          </li>
          <li className='shop-section-list-item'>
            <figcaption className='section-style'>
              <img src={moda} alt="" />
            </figcaption>
              <p>Moda</p>
          </li>
      </ol>
  )
}
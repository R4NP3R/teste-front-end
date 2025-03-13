import './brandsSection.scss'
import logo from '../../../../assets/Logo.svg'
import { SectionTitle } from '../sectionTitle/sectionTitle'

export const BrandsSection = () => {

  return (
    <section className='brand-section'>
      <SectionTitle withBars={false} title='Navegue por marcas'/>
      <ul className='brand-list'>
        {Array.from({length: 5}).map((_, i) => (
          <li key={i} className='brand-logo'>
            <img src={logo} alt="" />
          </li>
        ))}
      </ul>
    </section>
  )
}
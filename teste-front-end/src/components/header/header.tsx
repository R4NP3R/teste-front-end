import './header.scss'

import creditCard from '../../assets/CreditCard.svg'
import shieldCheck from '../../assets/ShieldCheck.svg'
import truck from '../../assets/Truck.svg'
import logo from '../../assets/Logo.svg'
import magnifyingGlass from '../../assets/MagnifyingGlass.svg'
import group from '../../assets/Group.svg'
import heart from '../../assets/Heart.svg'
import userCircle from '../../assets/UserCircle.svg'
import shoppingCart from '../../assets/ShoppingCart.svg'
import crownSimple from '../../assets/CrownSimple.svg'
export const Header = () => {


  return (
    <header>
      <ul className="site-informations" >
        <li className='information'>
          <img src={shieldCheck} alt="" />
          <p>Compra <span>100% segura</span></p>          
        </li>
        <li className='information'>
          <img src={truck} alt="" />          
          <p><span>Frete grátis</span> acima de R$ 200</p>
        </li>
        <li className='information'>
          <img src={creditCard} alt="" />          
          <p><span>Parcele</span> suas compras</p>
        </li>
      </ul>
      <div className='header-bar'>        
          <img src={logo} alt="" />
          <div className='search-bar'>
          <input type="text" placeholder='O que você está buscando?' />
          <img src={magnifyingGlass} alt="" />
          </div>
          <ul className='user-information'>
            <li className='user-information-item'><img src={group} alt="" /></li>
            <li className='user-information-item'><img src={heart} alt="" /></li>
            <li className='user-information-item'><img src={userCircle} alt="" /></li>
            <li className='user-information-item'><img src={shoppingCart} alt="" /></li>
          </ul>    
      </div>
      <nav className='header-navigation'>
        <ul>
          <li>
            <p>TODAS CATEGORIAS</p>
          </li>
          <li>
            <p>SUPERMERCADO</p>
          </li>
          <li>
            <p>LIVROS</p>
          </li>
          <li>
            <p>MODA</p>
          </li>
          <li>
            <p>LANÇAMENTO</p>
          </li>
          <li>
            <p className='active'>OFERTAS DO DIA</p>
          </li>
          <li>
            <img src={crownSimple} alt="" />
            <p>ASSINATURA</p>
          </li>
        </ul>
      </nav>    
    </header>
  )
}
import './footer-about-us.scss'

import logo from '../../../../assets/Logo.svg'
import insta from '../../../../assets/instagram.svg'
import face from '../../../../assets/facebook.svg'
import linkedin from '../../../../assets/linkedin.svg'
import { FooterInfo } from '../footer-info/footer-info'

export const FooterAboutUs = () => {
  return (
    <div className='footer-about-us'>
      <div className='container footer-about-us-box'>
        <div className='footer-about-us-social-media'>
          <img className='footer-about-us-social-media-logo' src={logo} alt="logo do site" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ol className='footer-about-us-social-media-list'> 
            <li><a href="https://instagram.com" target='_blank'><img src={insta} alt="" /></a></li>
            <li><a href="https://facebook.com" target='_blank'><img src={face} alt="" /></a></li>
            <li><a href="https://linkedin.com" target='_blank'><img src={linkedin} alt="" /></a></li>
          </ol>
        </div>
        <div className='separator'></div>
        <div className='footer-about-us-info'>
          <FooterInfo title='Institucional' 
            infos={[
              {info: 'Sobre Nós'},
              {info: 'Movimento'},
              {info: 'Trabalhe conosco'}
            ]}
          />
          <FooterInfo title='Ajuda' 
            infos={[
              {info: 'Suporte'},
              {info: 'Fale Conosco'},
              {info: 'Perguntas Frequentes'}
            ]}
          />
          <FooterInfo title='Termos' 
            infos={[
              {info: 'Termos e Condições'},
              {info: 'Política de Privacidade'},
              {info: 'Troca e Devolução'}
            ]}
          />
        </div>
      </div>
      <small className='copyright'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>  
    </div>
  )
}
import './footer.scss'
import { FooterAboutUs } from "./components/footer-about-us/footer-about-us"
import { FooterNewsLetter } from "./components/footer-newsletter/footer-newsletter"

export const Footer = () => {


  return (
    <footer className="site-footer">
      <FooterNewsLetter/>
      <div className='separator' />
      <FooterAboutUs/>
    </footer>
  )
}
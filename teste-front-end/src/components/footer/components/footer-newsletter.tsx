import './footer-newsletter.scss'

export const FooterNewsLetter = () => {

  return (
      <div className="newsletter-inscription">
        <div className="newsletter-container">
          <div className="newsletter-inscription-invitation">
            <h3>Inscreva-se na nossa newsletter</h3>
            <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
          </div>
        <div>
          <form  className="newsletter-inscription-form" action="">
            <div className="newsletter-inscription-form-elements">
              <input type="text" placeholder="Digite seu Nome" />
              <input type="text" placeholder="Digite seu e-mail" />
              <button onClick={(e) => e.preventDefault()} type="submit">INSCREVER</button>
            </div>
            <div className='newsletter-checkbox-terms'>
              <input  type="checkbox" name="terms" id="terms" required/>
              <label htmlFor="terms">Aceito os termos e condições</label>
            </div>            
          </form>
        </div>
        </div>
      </div>
  )
}
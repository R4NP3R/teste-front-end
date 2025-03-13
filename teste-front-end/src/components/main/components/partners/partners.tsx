import './partners.scss';

import partners from '../../../../images/partners.png';


export const Partners = () => {
  return (
    <div className="partners">
      <img className="partners-background-image" src={partners} alt="" />
      <h2 className="partners-title">Parceiros</h2>
      <p className="partners-description">Lorem ipsum dolor sit amet, consectetur</p>
      <button className="partners-button">Confira</button>
    </div>
  )
}
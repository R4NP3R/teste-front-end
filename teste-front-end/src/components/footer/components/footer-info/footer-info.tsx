import './footer-info.scss';


interface IFooterInfoProps {
  title: string;
  infos: {
    info: string
  }[]
}

export const FooterInfo = ({title, infos}: IFooterInfoProps) => {

  return (
    <ul className="footer-info-list">
      <h3 className="footer-info-list-title">{title}</h3>
      {infos.map(infos => {
        const {info} = infos
        return (
          <a key={info} href="#footer">
            <li className="footer-info-list-item" key={info}>{info}</li>
          </a>
        )
      }
      )}
    </ul>
  )
}
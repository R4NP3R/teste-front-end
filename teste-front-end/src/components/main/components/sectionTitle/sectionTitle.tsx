import './sectionTitle.scss'
interface ISectionTitleProps {
  title: string;
  withBars: boolean;
}


export const SectionTitle = ({title, withBars}: ISectionTitleProps) => {
  return (
    <div className="title-box">
      {withBars
      ?
      <>
      <div className="title-bar" />
        <h1 className="section-title">{title}</h1>
      <div className="title-bar" />
      </>
      :
        <h1 className="section-title">{title}</h1>
      }
      
    </div>
  )
}
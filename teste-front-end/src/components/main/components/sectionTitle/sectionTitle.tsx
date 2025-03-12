import './sectionTitle.scss'
interface ISectionTitleProps {
  title: string;
}


export const SectionTitle = ({title}: ISectionTitleProps) => {
  return (
    <div className="title-box">
      <div className="title-bar" />
      <h1 className="section-title">{title}</h1>
      <div className="title-bar" />
    </div>
  )
}
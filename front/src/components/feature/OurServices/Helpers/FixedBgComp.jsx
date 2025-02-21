import Heading from "../../../shared/Headings/Heading"

const FixedBgComp = ({ title, description, buttonText }) => {
  return (
    <>
        <Heading title={title} width={75} className="light" description={description} descriptionClassName="light" />

        <button className="cs-btn light">{buttonText} <i className="fa-regular fa-arrow-right"></i></button>
    </>
  )
}

export default FixedBgComp
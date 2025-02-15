
const Heading = ({title, className, width, description, descriptionClassName}) => {
  return (
    <>
        <div className="headings">
            <div className="headings" style={{width: `${width}%` || "100%"}}>
              <h4 className={`font-header ${className}`} >{title}</h4>
              {description && <p className={`font-sm ${descriptionClassName}`}>{description}</p>}
            </div>
        </div>
    </>
  )
}

export default Heading
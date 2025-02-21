import Heading from "../Headings/Heading"

const ChooseUs = ({ header, description, data }) => {

    const getGrid = data?.length

  return (
    <>
        <section className="choose-us pt-cs">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Heading title={header} description={description} />

                        <div className={`layout mt-5 gtc-${getGrid}`}> 
                            { 
                                data?.map((value, index) => {
                                    let getIndex = index % 2 === 0 
                                    let isLastItem = index === data.length - 1;
                                    return (
                                        <div className={`item ${getIndex ? '' : 'revert'} ${!isLastItem ? 'right' : ''}`}>
                                            <div className={`content ${getIndex ? 'bottom' : ''}`}>
                                                <h2 className="font-lg font-sans fs-70 bold">{index + 1}</h2>
                                            </div>
                                            <div className={`content ${getIndex ? '' : 'bottom'}`}>
                                                <p className="font-sm medium text-left fs-22">{value.header && value.header} <span className="fw-600">{value.description}</span></p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ChooseUs

const DetailCard = () => {
  return (
    <>
        <div className="container pt-cs">
            <div className="row">
                <div className="col-md-12">
                    <div className="property-inner-card">
                        <div className="head divide">
                            <div className="item">
                                <h4 className="font-sm text-left dark fs-40">Dubai, Jumeirah Village Circle</h4>
                                <p className="font-sm text-left fs-20">Dubai, Jumeirah Village</p>
                            </div>
                            <h4 className="font-lg medium fs-50">699,000 AED</h4>
                        </div>
                        <div className="bottom">
                            <div className="item">
                                <h4 className="font-sm text-left fs-20 dark">Apartment</h4>
                                <p className="font-sm text-left fs-12 ">Property Type</p>
                            </div>
                            <h4 className="font-sm text-left dark medium fs-18">3 &nbsp; <img src="/assets/img/bed.svg" alt="" className="icon" /></h4>
                            <h4 className="font-sm text-left dark medium fs-18">2 &nbsp; <img src="/assets/img/bathroom.svg" alt="" className="icon" /></h4>
                            <h4 className="font-sm text-left dark medium fs-18">1,420 m<sup>2</sup> &nbsp; <img src="/assets/img/sqft.svg" alt="" className="icon" /></h4>
                            <h4 className="font-sm text-left dark medium fs-18">1 &nbsp; <img src="/assets/img/car.svg" alt="" className="icon" /></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DetailCard
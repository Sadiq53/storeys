import Banner from "../../shared/Banner/Banner"
import Footer from "../../shared/Footer/Footer"
import Header from "../../shared/Header/Header"
import { useState } from "react"
import { propertyBanner } from "../../../utils/static/bannerData"
import Filters from "../../shared/Banner/Filters"
import Layout from "./Layout/Layout"

const PropertyList = () => {

  const [headerHeight, setHeaderHeight] = useState(0)

  return (
    <>
        <Header height={setHeaderHeight} />

        <Banner title={propertyBanner.title} bg={propertyBanner.bg} width={propertyBanner.width} height={propertyBanner.height} marginTop={headerHeight} />

        <div className="py-5">
            <Filters theme="dark" />
        </div>

        <Layout />

        <Footer />
    </>
  )
}

export default PropertyList
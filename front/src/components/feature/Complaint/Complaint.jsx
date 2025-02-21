import Header from "../../shared/Header/Header"
import Banner from "../../shared/Banner/Banner"
import { complaintBanner } from "../../../utils/static/bannerData"
import { useState } from "react"
import Footer from "../../shared/Footer/Footer"
import FormSection from "../../shared/Form/FormSection"
import AboutComp from "./Helpers/AboutComp"
import About from "../../shared/About/About"

const Complaint = () => {
 
    const [headerHeight, setHeaderHeight] = useState(0)

  return (
    <>
        <Header height={setHeaderHeight} />
        <Banner title={complaintBanner.title} bg={complaintBanner.bg} width={complaintBanner.width} height={complaintBanner.height} marginTop={headerHeight} />
        <About Component={AboutComp} />
        <FormSection />
        <Footer />
    </>
  )
}

export default Complaint
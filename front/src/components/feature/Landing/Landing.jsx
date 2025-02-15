import Header from "../../shared/Header/Header"
import Banner from "./Helpers/Banner"
import DevSection from "./Developers/DevSection"
import About from "./About/About"
import Properties from "./Properties/Properties"
import FixedBg from "../FixedBg/FixedBg"
import PopularAreas from "./Popular/PopularAreas"
import Frame from "../Frame/Frame"
import Testimonial from "../Testimonial/Testimonial"
import FormSection from "../Form/FormSection"
import Footer from "../../shared/Footer/Footer"
const Landing = () => {
  return (
    <>
        <Header />
        <Banner />
        <DevSection />
        <About />
        <Properties />
        <FixedBg />
        <PopularAreas />
        <Frame />
        <Testimonial />
        <FormSection />
        
        <Footer />
    </>
  )
}

export default Landing
import Footer from "../../shared/Footer/Footer"
import Header from "../../shared/Header/Header"
import { newsBanner } from "../../../utils/static/bannerData"
import Banner from "../../shared/Banner/Banner"
import { useState } from "react"
import LatestNews from "./Helpers/LatestNews"
const News = () => {    

    const [headerHeight, setHeaderHeight] = useState(0)

  return (
    <> 
        <Header height={setHeaderHeight} />
        <Banner title={newsBanner.title} bg={newsBanner.bg} width={newsBanner.width} height={newsBanner.height} marginTop={headerHeight}/>
        <LatestNews />
        <Footer />
    </>
  )
}

export default News
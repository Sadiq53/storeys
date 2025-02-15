import Banner from "./Banner"
import Content from "./Content"
const About = () => {
  return (
    <>
        <section className="about-section pt-cs">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Content />
                    </div>
                    <div className="col-md-6">
                        <Banner />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About
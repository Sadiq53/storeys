import Heading from "../../../shared/Headings/Heading"
import Filters from "./Filters"

const Banner = () => {
  return (
    <>
        <section className="main-banner">
            <div className="banner">
                <Heading title="Integrity | Expertise | Excellence" className="light fs-50" width="100" description="Dubai’s fastest growing brokerage, while providing a new standard of service." descriptionClassName="light" />
                <Filters />
            </div>
        </section>
    </>
  )
}

export default Banner
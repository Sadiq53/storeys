import ProfileCard from "./ProfileCard";
import Content from "./Content";

const PropertyContent = ({ top }) => {
  return (
    <>
        <section className="property-content pt-cs">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="layout">
                            <div className="content w-60">
                                <Content />
                            </div>
                            <div className="profile-card-layout w-40" style={{top: top}}>
                                <ProfileCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default PropertyContent
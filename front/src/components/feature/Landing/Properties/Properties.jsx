import Heading from '../../../shared/Headings/Heading'
import Gallery from './Gallery'

const Properties = () => {
  return (
    <>
        <section className="properties pt-cs">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Heading title="Featured Properties" width="60" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve' descriptionClassName='medium' />

                        <div className="mt-5">
                            <Gallery />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Properties
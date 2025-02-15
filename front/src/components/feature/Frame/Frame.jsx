import Content from "./Content";
const Frame = () => {
  return (
    <>
        <section className="pt-cs">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="frame-1">
                            <Content />
                            <div className="image">
                                <img src="/assets/img/frame-1.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Frame
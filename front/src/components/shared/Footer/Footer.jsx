import { NavLink } from "react-router-dom"
import Logo from "../../static_components/images/Logo"

const Footer = () => {
  return (
    <>
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="layout">
                            <div className="footer-content">
                                <div className="footer-logo mb-5">
                                    <Logo />
                                </div>
                                <div className="footer-buttons">
                                    <button className="cs-btn p-16-70">Book a  Valuation <i className="fa-regular fa-arrow-right"></i></button>
                                    <button className="cs-btn outline">Explore More <i className="fa-regular fa-arrow-right"></i></button>
                                </div>
                                <p className="font-sm text-left fs-16">Storeys is a top real estate brokerage in Dubai, excelling in Sales, Leasing, and Off-Plan properties. With 80+ years of expertise, we offer innovative strategies, helping investors maximize their real estate potential in a dynamic market.</p>
                            </div>
                            <div className="footer-links">
                                <h4 className="font-lg font-sans bold fs-18">Quick Links</h4>
                                <ul className="footer-links-list">
                                    <li><NavLink className='font-sm' to="/">Home</NavLink></li>
                                    <li><NavLink className='font-sm' to="/">About Us</NavLink></li>
                                    <li><NavLink className='font-sm' to="/">Our Team</NavLink></li>
                                    <li><NavLink className='font-sm' to="/">List a Property</NavLink></li>
                                    <li><NavLink className='font-sm' to="/">Careers</NavLink></li>
                                    <li><NavLink className='font-sm' to="/">Dubai Communities</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
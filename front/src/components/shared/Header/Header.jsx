import Logo from "../../static_components/images/Logo"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="layout">
                        <div className="logo">
                            <Logo width="100" height="100" />
                        </div>
                        <div className="nav-items">
                            <NavLink to="/" className="item font-sm medium">Home</NavLink>
                            <NavLink to="/" className="item font-sm medium">About Us</NavLink>
                            <NavLink to="/" className="item font-sm medium">Our Team</NavLink>
                            <NavLink to="/" className="item font-sm medium">Our Services</NavLink>
                            <NavLink to="/" className="item font-sm medium">List a Property</NavLink>
                            <NavLink to="/" className="item font-sm medium">Careers</NavLink>
                            <NavLink to="/" className="cs-btn">Contact Us <i className="fa-regular fa-arrow-right"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
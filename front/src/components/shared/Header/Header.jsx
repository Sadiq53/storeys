import Logo from "../../static_components/images/Logo"
import { NavLink } from "react-router-dom"
import { headerLinks } from "../../../utils/static/headerData"
import React, { useEffect, useRef } from "react"

const Header = ({ height }) => {
    const headerRef = useRef(null)

    useEffect(() => {
        if (headerRef.current && typeof height === 'function') {
            height(headerRef.current.offsetHeight)
        }
    }, [height])

  return (
    <header className="header" ref={headerRef}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="layout">
                        <div className="logo">
                            <Logo width="100" height="100" />
                        </div>
                        <div className="nav-items">
                            {headerLinks.map((link, index) => (
                                <NavLink key={index} to={link.link} className="item font-sm medium">{link.name}</NavLink>
                            ))}
                            <NavLink to="/contact" className="cs-btn">Contact Us <i className="fa-regular fa-arrow-right"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
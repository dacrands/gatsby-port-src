import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
    <nav className="navbar">
        <div className="nav__container">
            <div className="nav__link">
                <Link
                    activeStyle={{color:"#ebd039"}}
                    style={{
                        color: "white",
                        textDecoration: "none"
                    }}
                    to="/">
                    Home
                </Link>
            </div>
            <div className="nav__link">
                <Link
                    activeStyle={{color:"#ebd039"}}
                    style={{
                        color: "white",
                        textDecoration: "none"
                    }}
                    to="/about">
                    About
                </Link>
            </div>
        </div>        
    </nav>
);

export default Navbar;
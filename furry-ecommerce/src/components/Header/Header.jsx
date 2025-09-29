import React, { useState } from 'react'
import './Header.css'
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

function Header({ scrollToShop }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div className="header">
            <div className="container">
                <div className="logo"><Link to={"/"}><h2>FURRY</h2></Link></div>
                <div className={`navbar__links ${isMobileMenuOpen ? "open" : ""}`}>

                    <li><Link to={"/"}>Home</Link></li>
                    <li onClick={scrollToShop}><Link to={"/"}>Shop</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>

                </div>

                <div className="nav-icons">
                    <FiSearch size={24} className="icon" />
                    <FiUser size={24} className="icon" />
                    <FiShoppingCart size={24} className="icon" />
                    <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <GiHamburgerMenu size={24} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
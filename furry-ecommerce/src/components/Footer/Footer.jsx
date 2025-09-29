import React from 'react'
import './Footer.css'

//icons
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-card-list">
                    {/* 1 */}
                    <div className="footer-card">
                        <h2 className='footer-logo'>FURRY</h2>
                        <div className="icon-list">
                            <FaFacebook className='f-icon' />
                            <FaXTwitter className='f-icon' />
                            <FaYoutube className='f-icon' />
                            <FaInstagram className='f-icon' />
                            <FaAmazon className='f-icon' />
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="footer-card">
                        <h5>Shop</h5>
                        <p>About us</p>
                        <p>Conditions</p>
                        <p>Our Journals</p>
                        <p>Careers</p>
                        <p>Affiliate Programme</p>
                        <p>Ultras Press</p>
                    </div>
                    {/* 3 */}
                    <div className="footer-card">
                        <h5>Quick Links</h5>
                        <p>Offers</p>
                        <p>Discount Coupons</p>
                        <p>Stores</p>
                        <p>Track Order</p>
                        <p>Shop</p>
                        <p>Info</p>
                    </div>
                    {/* 4 */}
                    <div className="footer-card">
                        <h5>Customer Service</h5>
                        <p>FAQ</p>
                        <p>Contact</p>
                        <p>Privacy Policy</p>
                        <p>Returns & Refunds</p>
                        <p>Cookie Guidelines</p>
                        <p>Delivery Information</p>
                    </div>
                </div>
                <div className='footer-text'>
                    <p>© 2025 Furry. All rights reserved.</p>
                    <p>HTML Template by TemplatesJungle</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
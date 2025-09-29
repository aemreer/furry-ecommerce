import React from 'react'
import './Info.css'
import { HiOutlineTruck } from "react-icons/hi2";
import { MdPayment } from "react-icons/md";
import { FaMedal } from "react-icons/fa";
import { MdOutlineDiscount } from "react-icons/md";

function Info() {
    return (
        <div className="info-section">
            {/* 1 */}
            <div className="info-card">
                <div className="info-icon">
                    <HiOutlineTruck />
                </div>
                <h3>Free Delivery</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            {/* 2 */}
            <div className="info-card">
                <div className="info-icon">
                    <MdPayment />
                </div>
                <h3>100% Secure Payment</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            {/* 3 */}
            <div className="info-card">
                <div className="info-icon">
                    <FaMedal />
                </div>
                <h3>Quality Guarantee</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            {/* 4 */}
            <div className="info-card">
                <div className="info-icon">
                    <MdOutlineDiscount />
                </div>
                <h3>Daily Offers</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
        </div>
    )
}

export default Info
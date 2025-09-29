import React from 'react'
import './Discount.css'
import image from '../../assets/images/discount-img.png'

function Discount() {
    return (
        <div className="discount-section">
            <div className="discount-container">
                <div className="discount-left-side">
                    <h1 className='discount-title'>Get  <span style={{ color: "var(--accent-blue)" }} >25% Discount</span> on your first purchase</h1>
                    <h3>Just Sign Up & Register it now to become member.</h3>
                    <input className='discount-input' placeholder='Email' type="text" />
                    <button className='discount-btn'>Subscribe</button>
                </div>
                <div className="discount-right-side">
                    <img src={image} alt="" className='discount-img' />
                </div>
            </div>
        </div>
    )
}

export default Discount
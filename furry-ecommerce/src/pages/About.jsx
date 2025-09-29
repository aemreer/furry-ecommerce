import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import AboutUs from '../components/AboutUs/AboutUs'
import AboutInfo from '../components/AboutInfo/AboutInfo'
import Discount from '../components/Discount/Discount'
import Info from '../components/Info/Info'

function About() {
    return (
        <div>
            <Header />
            <AboutUs />
            <AboutInfo />
            <Discount />
            <Info />
            <Footer />
        </div>
    )
}

export default About
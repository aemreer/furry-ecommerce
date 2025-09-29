import React from 'react'
import Header from '../components/Header/Header'
import Discount from '../components/Discount/Discount'
import Info from '../components/Info/Info'
import Footer from '../components/Footer/Footer'
import ContactBanner from '../components/ContactBanner/ContactBanner'
import ContactInfo from '../components/ContactInfo/ContactInfo'
import Map from '../components/Map/Map'

function Contact() {
    return (
        <div>
            <Header />
            <ContactBanner />
            <ContactInfo />
            <Map />
            <Discount />
            <Info />
            <Footer />
        </div>
    )
}

export default Contact
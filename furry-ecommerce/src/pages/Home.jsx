import React, { useRef } from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import ProductList from '../components/ProductList/ProductList'
import CustomerReviews from '../components/CustomersReviews/CustomersReviews'
import BlogList from '../components/BlogList/BlogList'
import Discount from '../components/Discount/Discount'
import Info from '../components/Info/Info'

function Home() {
    const shopRef = useRef(null);

    const scrollToShop = () => {
        shopRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <Header scrollToShop={scrollToShop} />
            <HeroBanner />
            <div ref={shopRef}>
                <ProductList />
            </div>
            <CustomerReviews />
            <BlogList />
            <Discount />
            <Info />
            <Footer />
        </div>
    )
}

export default Home
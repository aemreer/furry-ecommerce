import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/Product';
import SingleProduct from '../components/SingleProduct/SingleProduct';
import Discount from '../components/Discount/Discount';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';


function ProductDetail() {
    const { id } = useParams();
    return (

        <div>
            <Header />
            <div className="product">
                {
                    products && products.map((product) => {
                        if (product.id == id) {
                            return <SingleProduct key={product.id} product={product} />
                        }
                    })
                }
            </div>
            <Discount />
            <Footer />
        </div>
    )
}

export default ProductDetail

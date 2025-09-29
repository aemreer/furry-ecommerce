import React from "react";
import "./ProductCard.css";
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {

    const navigate = useNavigate();
    return (
        <div className="product-card">
            <img loading="lazy" onClick={() => navigate("/product-details/" + product.id)} src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
            <button className="category-btn">{product.category}</button>
        </div>
    );
}

export default ProductCard;
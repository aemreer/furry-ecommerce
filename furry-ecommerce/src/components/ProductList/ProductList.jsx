import React, { useState } from "react";
import "./ProductList.css";
import ProductCard from "../ProductCard/ProductCard";
import CategoryFilter from '../CategoryFilter/CategoryFilter'
import products from '../../data/Product'


function ProductList() {


    const [selectedCategory, setSelectedCategory] = useState("All")


    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(product => product.category === selectedCategory);
    return (
        <div className="product-list-section">
            <div className="container">
                <h2 className="section-title">Best Selling Products</h2>
                <CategoryFilter
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />

                <div className="product-grid">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}

                </div>
            </div>
        </div>
    );
}

export default ProductList;
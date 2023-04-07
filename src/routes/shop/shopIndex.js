import React, { useContext } from "react";
import ProductCard from "../../components/product-card/PindexCard";
import { ProductsContext } from "../../context/productC";
import "./styles.css"

export default function Shop () {
    const {products} = useContext(ProductsContext)
    return (
        <div className="products-container">
            {products.map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </div>
    )
}
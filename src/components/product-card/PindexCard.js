import React, { useContext } from "react";
import "./styles.css"
import Button from "../button/btn-index";
import { CartContext } from "../../context/CardCon";

export default function ProductCard({ product }) {
    const { addItemToCart } = useContext(CartContext)
    const { name, price, imageUrl } = product;

    const addProductToCart = () => addItemToCart(product)

    return (
        <>
            <div className="product-card-container">
                <img src={imageUrl} alt={`${name}`}/>

                <div className="footer">
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                </div>
                
                <Button buttonType='inverted' onClick={addProductToCart}>
                    Add to card
                </Button>
            </div>
        </>
    )
}
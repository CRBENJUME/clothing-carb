import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CardCon";
import "./style.css"

export default function CheckOutItem ({cartItem}) {
    const { name, imageUrl, price, quantity } = cartItem
    const { clearItemToCart, addItemToCart, removeItemToCart } = useContext(CartContext)

    const clearItemHandler = () => {
        clearItemToCart(cartItem)
    }

    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemToCart(cartItem)

    return (
        <div className="checkout-item-container">
            <div className="image-container">
               <img src={imageUrl} alt={`${name}`}/> 
            </div>
            <p className="name">{name}</p>
            <p onClick={(0)}></p>
            <p className="quantity">
                <p className="arrow" onClick={removeItemHandler}>
                    &#10094;
                </p>
                <span className="value">{quantity}</span>
                <p className="arrow"onClick={addItemHandler}>
                    &#10095;
                </p>
            </p>
            <p></p>
            <p className="price">{price}</p>
            <div className='remove-button' onClick={clearItemHandler}>
                &#10005;
            </div>
        </div>
    )
}
import React from "react";
import "./style.css"

export default function CartItem ({props}){
    const { name, imageUrl,price ,quantity } = props
     return (
        <div className="cart-item-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="item-details">
                <span className="name">
                    {name}
                </span>
            </div>
            <span className="price">{quantity} x ${price}</span>
        </div>
     )
}

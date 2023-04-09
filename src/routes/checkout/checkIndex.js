import React, { useContext } from "react";
import { CartContext } from "../../context/CardCon";
import "./style.css"
import CheckOutItem from "../../components/checkout-item/CheckItemI";

export default function CheckOut() {
    const { cartItems, carTotal } = useContext(CartContext)

    return (
        <div className="checkout-container">
            <header className="checkout-header">
                <div className="header-block">
                    <p>Product</p>
                </div>
                <div className="header-block">
                    <p>Descripcion</p>
                </div>
                <div className="header-block quantity">
                    <p>Quantity</p>
                </div>
                <div className="header-block price">
                    <p>Price</p>
                </div>
                <div className="header-block remove">
                    <span>Remove</span>
                </div>
            </header>
                {
                    cartItems.map((item) => {
                       return (
                            <CheckOutItem key={item.id} cartItem={item}/>
                        ) 
                    })
                }
            <p className="total">TOTAL: ${carTotal}</p>
        </div>
    )
}
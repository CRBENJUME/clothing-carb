import React, { useContext } from "react";
import { CartContext } from "../../context/CardCon";
import './style.css'
import CartItem from "../cart-item/itemIndex";
import Button from "../button/btn-index";

export default function CartDropdown() {
    const { cartItems } = useContext(CartContext)

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(item => 
                    <CartItem key={item.id} props={item}/>
                )}
            </div>
            <Button>CHECKOUT</Button>
        </div>
    )
}
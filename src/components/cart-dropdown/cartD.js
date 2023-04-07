import React from "react";
import './style.css'
import Button from "../button/btn-index";

export default function CartDropdown() {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items"/>
            <Button>CHECKOUT</Button>
        </div>
    )
}
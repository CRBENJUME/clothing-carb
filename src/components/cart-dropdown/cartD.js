import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CardCon";
import './style.css'
import CartItem from "../cart-item/itemIndex";
import Button from "../button/btn-index";

export default function CartDropdown() {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const gotoCheckOutHandler = () => {
        navigate('/checkout')
    }

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
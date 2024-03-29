import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './styles.css'
import { CartContext } from "../../context/CardCon";

export default function CartIcon (){
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{cartCount}</span>
        </div>
    )
}
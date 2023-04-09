import React, { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, addProduct) => {
    //find if cartItems contains addProduct
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === addProduct.id
    );
        
    //if found, increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
        cartItem.id === addProduct.id ? 
            { ...cartItem, quantity: cartItem.quantity + 1 }
            : 
            cartItem
        );
    }
    // return new array with midified cartItems/ new cart items
    return [...cartItems, { ...addProduct, quantity: 1 }];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
})

export const CartProvider = ({children}) => {
    const [ isCartOpen, setIsCartOpen ] = useState(false)
    const [ cartItems, setCartItems ] = useState([])
    const [ cartCount, setCartCount ] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => 
            total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (addProduct) => {
        setCartItems(addCartItem(cartItems, addProduct))
    }

    const val = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, setCartCount}

    return <CartContext.Provider value={val}>{children}</CartContext.Provider>
}
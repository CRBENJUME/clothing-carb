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

const removeCartItem = (cartItems, removeItem) => {
    // Find the cart item to remove
  const itemIndex = cartItems.findIndex((item) => item.id === removeItem.id);

  if (itemIndex === -1) {
    // If the cart item was not found, return the original array
    return cartItems;
  }

  const itemToRemove = cartItems[itemIndex];

  // If the quantity of the item to remove is 1, completely remove the cart item
  if (itemToRemove.quantity === 1) {
    return cartItems.filter((item) => item.id !== removeItem.id);
  }

  // Decrease the quantity of the cart item by 1 and return the new array of cart items
  const newCartItems = [...cartItems];
  newCartItems[itemIndex] = { ...itemToRemove, quantity: itemToRemove.quantity - 1 };
  return newCartItems;
}

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    clearItemFromCart: () => {},
    removeItemFromCart: () => {},
    cartCount: 0,
    carTotal: 0
})

export const CartProvider = ({children}) => {
    const [ isCartOpen, setIsCartOpen ] = useState(false)
    const [ cartItems, setCartItems ] = useState([])
    const [ cartCount, setCartCount ] = useState(0)
    const [ carTotal, setCarTotal ] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => 
            total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newCarTotal = cartItems.reduce((total, cartItem) => 
            total + cartItem.quantity * cartItem.price, 0)
        setCarTotal(newCarTotal)
    }, [cartItems])

    const addItemToCart = (addProduct) => {
        setCartItems(addCartItem(cartItems, addProduct))
    }

    const removeItemToCart = (removeItem) => {
        setCartItems(removeCartItem(cartItems, removeItem))
    }

    const clearItemToCart = (clearItem) => {
        setCartItems(clearCartItem(cartItems, clearItem))
    }

    const val = { 
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        cartItems, 
        setCartCount, 
        removeItemToCart,
        clearItemToCart,
        cartCount,
        carTotal
    }

    return <CartContext.Provider value={val}>{children}</CartContext.Provider>
}
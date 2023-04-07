import React, {useState, createContext} from "react";
import PRODUCTS from "../shopData.json"

export const ProductsContext = createContext({
    products: [],

})

export const ProductProvider = ({children}) => {
    // eslint-disable-next-line
    const [ products, setProducts ] = useState(PRODUCTS)
    const val = { products }
    return (
        <ProductsContext.Provider value={val}>{children}</ProductsContext.Provider>
    )
}
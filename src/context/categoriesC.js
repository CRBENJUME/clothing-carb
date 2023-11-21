import React, {useState, createContext, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/index.js";

export const CategoriesContext = createContext({
    categoriesMap: {},

})

export const CategoriesProvider = ({children}) => {
    // eslint-disable-next-line
    const [ categoriesMap, setCategoriesMap ] = useState({})

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            console.log(categoryMap)
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap()
    }, [])
    


    const val = { categoriesMap }
    return (
        <CategoriesContext.Provider value={val}>
            {children}
        </CategoriesContext.Provider>
    )
}
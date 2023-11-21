import './styleCP.css'
import React, { useContext } from "react";
import CategoryPreview from "../../components/category-preview/previewC";
import { CategoriesContext } from "../../context/categoriesC"

export default function CategoriesPreview () {
    const { categoriesMap } = useContext(CategoriesContext)

    return (
        <>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title]
                    return (
                        <CategoryPreview key={title} title={title} products={products}/>
                    )
                })
            }
        </>
    )
}
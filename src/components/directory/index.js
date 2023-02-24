import React from "react";
import Products from "../../products.json"
import CategoryItem from "../category-item";
import './styles.css'

const categories = Products

export default function Directory () {
    return (
        <div className="directory-con">
          {
            categories.map(( category ) => (
                <CategoryItem key={category.id} category={category}/>
              )
            )
          }
        </div>
    )
}
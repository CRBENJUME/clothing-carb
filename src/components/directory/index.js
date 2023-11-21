import React from "react";
import Products from "../../products.json"
import DirectoryItem from "../directory-item";
import './styles.css'

const categories = Products

export default function Directory () {
    return (
        <div className="directory-con">
          {
            categories.map(( category ) => (
                <DirectoryItem key={category.id} category={category}/>
              )
            )
          }
        </div>
    )
}
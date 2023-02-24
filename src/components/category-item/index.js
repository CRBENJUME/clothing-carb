import React from "react";
import './index.css'

export default function CategoryItem({ category }) {
    const { imageUrl, title } = category
    return (
        <header className="category-con">
            <div
                className='background-image'
                style={
                    { backgroundImage: `url(${imageUrl})` }
                }
            />
            <div className="cBody-con">
                <h2>{title}</h2>
                <p>SHOP NOW</p>
            </div>
        </header>
    )
}
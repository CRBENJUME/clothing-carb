import React from "react";
import './index.css'

export default function DirectoryItem({ category }) {
    const { imageUrl, title } = category
    return (
        <header className="directory-item-container">
            <div
                className='background-image'
                style={
                    { backgroundImage: `url(${imageUrl})` }
                }
            />
            <div className="body">
                <h2>{title}</h2>
                <p>SHOP NOW</p>
            </div>
        </header>
    )
}
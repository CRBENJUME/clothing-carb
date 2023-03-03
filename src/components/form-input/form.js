import React from "react";
import "./formStyle.css"

export default function formInput({ label, ...props }) {
    return (
        <div className="group">
            
            { label && (
                <label className={`${ props.value.length ? 'shrink' : ''
                } form-input-label`}
              >
                    { label }
                </label>
            )}
             <input className="form-input" {...props}/>
        </div>
    )
}
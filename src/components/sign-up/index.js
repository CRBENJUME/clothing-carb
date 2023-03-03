import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocument } from "../../utils/firebase";
import FormInput from "../form-input/form";
import Button from "../button/btn-index";

import "./styles.css"

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

export default function SignUpForm () {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields
    
    console.log(formFields)
    
    const handleSubmit = async (event) => {
        event.preventDefault()

        if( password !== confirmPassword) {
            alert('Password is incorrect')
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
              );
            await createUserDocument( user, { displayName })
        } catch (e) {
            console.log(e)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up with your email and password</span>
            <form onSubmit={handleSubmit}>
                {/* 
                    If doesn't work, it's just 'cause the name and the value are not the same
                */}
                <FormInput label="Display Name" type='text' required onChange={handleChange} name='displayName' value={displayName}/>
                
                <FormInput label="Email" type='email' required onChange={handleChange} name='email' value={email}/>

                <FormInput label="Password" type='password' required onChange={handleChange} name='password' value={password}/>

                <FormInput label="Confirm Password" type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}
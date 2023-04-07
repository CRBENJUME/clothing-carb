import React, { useState } from "react";
import { signInWithGooglePopup, signInAuthWithEmailAndPassword } from "../../utils/firebase";
import FormInput from "../form-input/form";
import Button from "../button/btn-index";

import "./styles.css"

const defaultFormFields = {
    email: '',
    password: ''
  };

export default function SignInForm () {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields
    
    console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            // eslint-disable-next-line
            const { user } = await signInAuthWithEmailAndPassword(email, password)
            resetFormFields()
        } catch (e) {
            switch (e.code) {
                case 'auth/wrong_password':
                    alert('Incorrect password for email')
                    break
                case 'auth/user_not_found':
                    alert('This user/email was not found')
                    break
                default:
                    console.log(e)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
                {/* 
                    If doesn't work, it's just 'cause the name and the value are not the same
                */}
                <FormInput label="Email" type='email' required onChange={handleChange} name='email' value={email}/>

                <FormInput label="Password" type='password' required onChange={handleChange} name='password' value={password}/>

                <div className="buttons-container">
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}
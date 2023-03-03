import React from "react";
import SignUpForm from "../../components/sign-up/index";
import {  signInWithGooglePopup, createUserDocument } from "../../utils/firebase/index";

export default function SignIn () {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocument(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in With Google Popup
            </button>
            <SignUpForm/>
        </div>
    )
}
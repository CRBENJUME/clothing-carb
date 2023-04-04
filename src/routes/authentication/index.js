import React from "react";
import SignUpForm from "../../components/sign-up/index";
import SignInForm from "../../components/sign-in/index-signIn";
import {  signInWithGooglePopup, createUserDocument } from "../../utils/firebase/index";

import './styles.css'

export default function Authentication () {
    return (
        <div className="authentication">
            <SignInForm />
            <SignUpForm/>
        </div>
    )
}
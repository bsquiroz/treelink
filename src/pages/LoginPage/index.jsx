import React from "react";
import "./styles.css";

import { auth } from "../../firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const LoginPage = () => {
    async function handleOnClick() {
        const googleProvider = new GoogleAuthProvider();
        await signInWithGoogle(googleProvider);
    }

    async function signInWithGoogle(googleProvider) {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <span className="btn" onClick={handleOnClick}>
                Login with Google
            </span>
        </div>
    );
};

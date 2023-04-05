import React from 'react'
import { getAuth, signInWithRedirect, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { GoogleButton } from 'react-google-button'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { auth } from "../firebase.js";
import '../styles/style.css'

export default function Login() {

    const provider = new GoogleAuthProvider();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    function handleClick(){
        signInWithRedirect(auth, provider);
        getRedirectResult(auth)
        .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
    
            // The signed-in user info.
            const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        }).catch((error) => {
        // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        });
    }

    return (
        <>
        
        <div className="sign-up-container">
            <Form className="sign-up-form" onSubmit={signUp}>
                <h1 style={{fontWeight: "bold"}}>Create Account</h1>
                <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ></input>
                <br></br>
                <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></input>
                <br></br>
                <Button variant="primary" type="submit">Sign Up</Button>
            </Form>
                <div className="lines">
                    <div className="vl"></div>
                    OR
                    <div className="vl"></div>
                </div>
            <GoogleButton onClick={handleClick} />
        </div>
        </>
    )

}

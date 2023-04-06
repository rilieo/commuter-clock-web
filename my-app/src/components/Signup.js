import React from 'react'
import { GoogleButton } from 'react-google-button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap'
import { useUserAuth } from "../context/UserAuthContext.js";
import '../styles/style.css'

export default function Login() {

    // const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try{
            await signUp(email, password);
            navigate("/settings");
        } catch (err){
            setError(err.message);
        }
    }

    // function handleClick(){
    //     signInWithRedirect(auth, provider);
    //     getRedirectResult(auth)
    //     .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access Google APIs.
    //         const credential = GoogleAuthProvider.credentialFromResult(result);
    //         const token = credential.accessToken;
    
    //         // The signed-in user info.
    //         const user = result.user;
    //     // IdP data available using getAdditionalUserInfo(result)
    //     // ...
    //     }).catch((error) => {
    //     // Handle Errors here.
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // The email of the user's account used.
    //         const email = error.customData.email;
    //         // The AuthCredential type that was used.
    //         const credential = GoogleAuthProvider.credentialFromError(error);
    //     // ...
    //     });
    // }

    return (
        <>
        
        <div className="sign-up-container">
        {error && <Alert variant="danger">{error}</Alert>}
            <Form className="sign-up-form" onSubmit={handleSubmit}>
                <h1 style={{fontWeight: "bold"}}>Create Account</h1>
                <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
                <br></br>
                <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
                <br></br>
                <Button variant="primary" type="submit">Sign Up</Button>
            </Form>
            {/* <div>
                <GoogleButton onClick={handleClick} />
            </div> */}
        </div>
        </>
    )

}

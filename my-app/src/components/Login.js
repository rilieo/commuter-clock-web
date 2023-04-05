import React from 'react'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Form, Button } from 'react-bootstrap'
import { auth } from "../firebase.js";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        console.log(userCredential);
        })
        .catch((error) => {
        console.log(error);
        });
    };

    return (
    <div className="login-container">
        <Form className="login-form" onSubmit={signIn}>
            <h1>Log In to your Account</h1>
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
            <Button variant="dark" type="submit">Log In</Button>
        </Form>
    </div>
    )
}

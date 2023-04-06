import React from 'react'
import { useState } from 'react'
import { GoogleButton } from 'react-google-button';
import { Form, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext.js';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const { logIn, googleSignIn } = useUserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try{
            await logIn(email, password)
            navigate("/settings")
        } catch (err){
            setError(err.message)
        }
    }

    const handleGoogleSignIn = async (e) => {
        e.preventDefault()
        try{
            await googleSignIn()
            navigate("/settings")
        } catch (error){
            console.log(error.message)
        }
    }

    return (
    <div className="login-container">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form className="login-form" onSubmit={handleSubmit}>
            <h1>Log In to your Account</h1>
            <br></br>
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
            <Button variant="primary" type="submit">Log In</Button>
        </Form>
        <div className="lines">
                <div className="vl"></div>
                OR
                <div className="vl"></div>
        </div>
        <GoogleButton onClick={handleGoogleSignIn}></GoogleButton>
    </div>
    )
}

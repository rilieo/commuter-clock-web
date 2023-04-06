import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate()

    function login(e){
        e.preventDefault()
        navigate("/login")
    }

    function signup(e){
        e.preventDefault()
        navigate("/signup")
    }
    
    return (
        <>
            <div className="cont">
                <div>
                    <h2 className="company" style={{fontFamily: "nanum", fontSize: 50}}>Commuter Clock</h2>
                    <h4 className="company" style={{fontFamily: "nanum", fontSize: 25}}>by City Surfers Inc.</h4>
                </div>
                <div className="buttons">
                    <Button className="login" variant="dark" onClick={login}>Login</Button>
                    <Button variant="dark" onClick={signup}>Sign Up</Button>
                </div>
            </div>
            <video id="background-vid" autoPlay loop muted>
                
            </video>
        </>
    )
}

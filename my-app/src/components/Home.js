import React from 'react'
import { Button, Dropdown } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import vid from '../assets/video/train.mov'
import About from './About.js'

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
                <div className="header">
                    <div className="left">
                        <h2 className="company" style={{fontFamily: "nanum", fontSize: 50}}>Commuter Clock</h2>
                        <h4 className="company" style={{fontFamily: "nanum", fontSize: 25}}>by City Surfers Inc.</h4>
                    </div>
                    <div className="center">
                        <Link to="/about" style={{color: "black", fontWeight: "bold", fontSize: "25px"}}>About Us</Link>
                    </div>
                    <div className="right">
                        <Button className="login" variant="dark" onClick={login}>Login</Button>
                        <Button variant="dark" onClick={signup}>Sign Up</Button>
                    </div>
                </div>
                <br></br>
                <div className="video">
                    <video style={{display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '1000px'}}
                    autoPlay loop muted>
                            <source src={vid}></source>
                    </video>
                </div>
                <br></br>
                <br></br>
                <div className="mission-container">
                    <br></br>
                    <br></br>
                    <br></br>
                    <h4 className="mission-header">Our Mission</h4>
                    <h2>Empowering people to use transportation more efficiently and sustainably</h2>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <br></br>
                <br></br>
                <div>

                </div>
            </div>
        </>
    )
}

import React from 'react'
import { Button } from 'react-bootstrap'

export default function Home() {
    return (
        <div className="cont">
        <div>
            <h2 className="company" style={{fontFamily: "nanum", fontSize: 50}}>Commuter Clock</h2>
            <h4 className="company" style={{fontFamily: "nanum", fontSize: 25}}>by City Surfers Inc.</h4>
        </div>
        <div className="buttons">
            <Button className="login" variant="dark">Login</Button>
            <Button variant="dark">Sign Up</Button>
        </div>
</div>
    )
}

import React from 'react'
import Riley from '../assets/img/riley_headshot.jpeg'
import Max from '../assets/img/max_headshot.png'
import Faith from '../assets/img/faith_headshot.jpeg'

export default function About() {
    return (
        <>
        <h1 style={{marginLeft: "10px"}}>
            About Us
        </h1>
        <h5 style={{marginLeft: "10px"}}>
            Our product utilizes a split-flap design in order to
            display the best and shortest train route to take
        </h5>
        <br></br>
        <h2 style={{marginLeft: "10px"}}>
            Meet the team
        </h2>
        <div className="headshots">
            {/* <img
            src={Riley} alt="Riley" className="Riley">
            </img>
            <img
            src={Max} alt="Max" className="Max">
            </img>
            <img
            src={Faith} alt="Faith" className="Faith">
            </img> */}
        </div>
        </>
    )
}

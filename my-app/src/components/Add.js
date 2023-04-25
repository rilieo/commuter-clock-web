import React, { useRef, useState } from 'react'
import app from '../firebase.js';
import { Form, Button, Card } from 'react-bootstrap'
import { setDoc, doc, getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import '../styles/style.css'

export default function Add() {

    const auth = getAuth();
    const user = auth.currentUser;
    const email = user.email
    const startPtRef = useRef()
    const destRef = useRef()
    const startTimeRef = useRef()
    const endTimeRef = useRef()
    const waitTimeRef = useRef()
    const [wantCar, setWantCar] = useState(false)

    function handleSubmit(e) {

        e.preventDefault()

        setDoc(doc(getFirestore(app), "settings", email), {
            destination: destRef.current.value,
            end_hour: endTimeRef.current.value,
            origin: startPtRef.current.value,
            start_hour: startTimeRef.current.value,
            wait_seconds: waitTimeRef.current.value,
            should_consider_car: wantCar
        })
            alert('User added')

        e.target.reset()
        
    }
    
    return (
    <>
        <div className="add-container">
            <h1>Add</h1>
            <Card className="add-form" border="dark">
                <Card.Body>
                        <Form id="form" onSubmit={handleSubmit}> 
                            <Form.Group id="start">
                                <Form.Label>Starting Point</Form.Label>
                                <Form.Control type="text" ref={startPtRef} required></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Destination</Form.Label>
                                <Form.Control id="end" type="text" ref={destRef}required></Form.Control>
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Start Time</Form.Label>
                                <Form.Control id="start_time" type="time" ref={startTimeRef} required></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>End Time</Form.Label>
                                <Form.Control id="end_time" type="time" ref={endTimeRef} required></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Wait Time</Form.Label>
                                <Form.Control id="wait_time" type="number" ref={waitTimeRef}required></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Car</Form.Label><br></br>
                                <Form.Check type="switch" onChange={(e) => setWantCar(e.target.checked)}></Form.Check>
                            </Form.Group>
                            <br></br>
                            <Button className="w-100" type="submit" border="dark" variant="dark">Add</Button>
                        </Form>
                </Card.Body>
            </Card>
        </div>
    </>
    
    )
}
import React, { useRef } from 'react'
import app from '../firebase.js';
import { Form, Button, Card } from 'react-bootstrap'
import { setDoc, doc, getFirestore } from 'firebase/firestore/lite';
import '../styles/style.css'

export default function Settings() {

    const userRef = useRef()
    const startPtRef = useRef()
    const destRef = useRef()
    const startTimeRef = useRef()
    const endTimeRef = useRef()
    const waitTimeRef = useRef()
    const carRef = useRef()

    function handleSubmit(e) {

        e.preventDefault()

        setDoc(doc(getFirestore(app), "settings", userRef.current.value), {
            destination: destRef.current.value,
            end_hour: endTimeRef.current.value,
            origin: startPtRef.current.value,
            start_hour: startTimeRef.current.value,
            wait_seconds: waitTimeRef.current.value,
            should_consider_car: carRef.current.checked
        });
            alert('User added');

        e.target.reset()
        
    }
    
    return (
    <>
        <br></br>
        <h1 className="text-center mb-4" id="header">Settings</h1>
        <div className="add-container">
            <Card className="add-form" border="dark">
                <Card.Body>
                        <Form id="form" onSubmit={handleSubmit}> 
                            <Form.Group id="user">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" ref={userRef} required></Form.Control>
                            </Form.Group>
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
                                <Form.Label>Car</Form.Label>
                                <Form.Check type="switch"></Form.Check>
                            </Form.Group>
                            <br></br>
                            <Button className="w-100" type="submit" border="dark" variant="dark">Submit</Button>
                        </Form>
                </Card.Body>
            </Card>
        </div>

    </>
    
    )
}
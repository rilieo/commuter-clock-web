import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { useRef, useState  } from 'react'
import { updateDoc, getFirestore, getDoc, doc } from 'firebase/firestore/lite'
import app from '../firebase.js'

export default function Edit() {

    const db = getFirestore(app);
    var data = [];

    const userRef = useRef()
    const startPtRef = useRef()
    const destRef = useRef()
    const startTimeRef = useRef()
    const endTimeRef = useRef()
    const waitTimeRef = useRef()
    const carRef = useRef()

    const [startPt, setStartPt] = useState("")
    const [dest, setDest] = useState("")
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")
    const [waitTime, setWaitTime] = useState("")
    const [wantCar, setWantCar] = useState(false)

    getDoc(doc(db, "settings", "user")).then(docSnap => {
        if (docSnap.exists()) {
            data = Object.values(docSnap.data())
            console.log(data);
            
            setStartPt(data[1])
            setDest(data[2])
            setStartTime(data[0])
            setEndTime(data[3])
            setWaitTime(data[4])
            setWantCar(data[5])
    
        } else {
            console.log("No such document!");
        }
        })

    function handleSubmit(e){

        e.preventDefault()

        updateDoc((getFirestore(app), "users", userRef.current.value), {
            destination: destRef.current.value,
            end_hour: endTimeRef.current.value,
            origin: startPtRef.current.value,
            start_hour: startTimeRef.current.value,
            wait_seconds: waitTimeRef.current.value,
            should_consider_car: carRef.current.checked
        });
        
        alert('User updated!');

    }

    function handleChange(e){
        e.preventDefault()

    }

    return (
        <>
        <h1 className="text-center mb-4" id="header">Update</h1>
        <Card border="dark">
            <Card.Body>
                    <Form id="form" onSubmit={handleSubmit}> 
                        <Form.Group id="user">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" ref={userRef} onChange={handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group id="start">
                            <Form.Label>Starting Point</Form.Label>
                            <Form.Control type="text" ref={startPtRef} onChange={handleChange} required></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Destination</Form.Label>
                            <Form.Control id="end" type="text" ref={destRef} onChange={handleChange}required></Form.Control>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Start Time</Form.Label>
                            <Form.Control id="start_time" type="time" ref={startTimeRef} onChange={handleChange} required></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>End Time</Form.Label>
                            <Form.Control id="end_time" type="time" ref={endTimeRef} onChange={handleChange} required></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Wait Time</Form.Label>
                            <Form.Control id="wait_time" type="number" ref={waitTimeRef} onChange={handleChange} required></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Car</Form.Label>
                            <Form.Check type="switch" onChange={handleChange}></Form.Check>
                        </Form.Group>
                        <br></br>
                        <Button className="w-100" type="submit" border="dark" variant="dark">Update</Button>
                    </Form>
            </Card.Body>
        </Card>

    </>
    )
}

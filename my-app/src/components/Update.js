import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { useRef, useState  } from 'react'
import { updateDoc, getFirestore, getDoc, doc } from 'firebase/firestore/lite'
import { getAuth } from 'firebase/auth'
import app from '../firebase.js'

export default function Update() {

    const auth = getAuth();
    const user = auth.currentUser;
    const [ startPt, setStartPt ] = useState("")
    const [ dest, setDest ] = useState("")
    const [ waitTime, setWaitTime ] = useState("")
    const startTimeRef = useRef()
    const endTimeRef = useRef()
    const [ wantCar, setWantCar ] = useState(true)

    getDoc(doc(getFirestore(app), "settings", user.email)).then(docSnap => {
            let arr = Object.values(docSnap.data())
            console.log(arr)
            setStartPt(arr[0])
            setDest(arr[4])
            setWaitTime(arr[5])
            setWantCar(arr[3])
            console.log(wantCar)
    })

    function handleSubmit(e){

        e.preventDefault()

        updateDoc(doc(getFirestore(app), "settings", user.email), {
            destination: dest,
            end_hour: endTimeRef.current.value,
            origin: startPt,
            start_hour: startTimeRef.current.value,
            wait_seconds: waitTime,
            should_consider_car: wantCar
        });
        
        alert('User updated!');

    }

    return (
        <>
        <div className="update-container">
            <h1 className="text-center mb-4" id="header">Update</h1>
            <Card className="update-form" border="dark">
                <Card.Body>
                        <Form id="form" onSubmit={handleSubmit}> 
                            <Form.Group id="start">
                                <Form.Label>Starting Point</Form.Label>
                                <Form.Control type="text" value={startPt} onChange={(e) => setStartPt(e.target.value)} required></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Destination</Form.Label>
                                <Form.Control id="end" type="text" value={dest} onChange={(e) => setDest(e.target.value)} required></Form.Control>
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
                                <Form.Control id="wait_time" type="number" value={waitTime} onChange={(e) => setWaitTime(e.target.value)} required></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Car</Form.Label>
                                <Form.Check type="switch" onChange={(e) => setWantCar(e.target.checked)}></Form.Check>
                            </Form.Group>
                            <br></br>
                            <Button className="w-100" type="submit" border="dark" variant="dark">Update</Button>
                        </Form>
                </Card.Body>
            </Card>
        </div>
    </>
    )
}

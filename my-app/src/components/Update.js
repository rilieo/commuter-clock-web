import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { useRef, useState  } from 'react'
import { updateDoc, getFirestore, getDoc, doc } from 'firebase/firestore/lite'
import { getAuth } from 'firebase/auth'
import app from '../firebase.js'

export default function Update() {

    const auth = getAuth();
    const user = auth.currentUser;
    // getDoc(doc(getFirestore(app), "settings", user.email)).then(docSnap => {
    //         var arr = Object.values(docSnap.data())
    //         var data = [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]]
    //         console.log(data)
    // })

    // const [ startPt, setStartPt ] = useState(data[0])
    const startPtRef = useRef()
    const destRef = useRef()
    const startTimeRef = useRef()
    const endTimeRef = useRef()
    const waitTimeRef = useRef()
    const [ wantCar, setWantCar ] = useState(false)

    function handleSubmit(e){

        e.preventDefault()

        updateDoc(doc(getFirestore(app), "settings", user.email), {
            destination: destRef.current.value,
            end_hour: endTimeRef.current.value,
            origin: startPtRef.current.value,
            start_hour: startTimeRef.current.value,
            wait_seconds: waitTimeRef.current.value,
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
                                <Form.Control type="text" ref={startPtRef} required></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Destination</Form.Label>
                                <Form.Control id="end" type="text" ref={destRef} required></Form.Control>
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
                                <Form.Control id="wait_time" type="number" ref={waitTimeRef} required></Form.Control>
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

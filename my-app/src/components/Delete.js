import React, { useRef } from 'react'
import app from '../firebase.js'
import { Form, Button, Card } from 'react-bootstrap'
import { getFirestore, doc, deleteDoc } from 'firebase/firestore/lite';

export default function Delete() {

    const userRef = useRef()

    function handleSubmit(e){
        e.preventDefault()

        deleteDoc(doc(getFirestore(app), "settings", userRef.current.value));

        e.target.reset()

    }

    return (
        <>
            <Card>
                <Card.Body>
                <Form onSubmit={handleSubmit}> 
                    <Form.Group id="user">
                        <Form.Label>Username</Form.Label>
                            <Form.Control type="text" ref={userRef} required></Form.Control>
                    </Form.Group>
                    <br></br>
                    <Button className="w-100" type="submit" variant="dark">Delete</Button>
                </Form>
                </Card.Body>
            </Card>
        </>
    )
}

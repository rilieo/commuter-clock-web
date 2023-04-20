import React, { useRef } from 'react'
import app from '../firebase.js'
import { Form, Button, Card } from 'react-bootstrap'
import { getFirestore, doc, deleteDoc } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth'

export default function Delete() {

    const auth = getAuth();
    const user = auth.currentUser;
    const email = user.email

    const userRef = useRef()

    function handleSubmit(e){
        e.preventDefault()

        deleteDoc(doc(getFirestore(app), "settings", email));

        e.target.reset()

    }

    return (
        <>
        <div className="delete-container">
            <div style={{maxWidth: '550px'}}>
                <h2>Are you sure you want to delete?</h2>
                <br></br>
                <Button className="w-100" type="submit" variant="dark">Delete</Button>
            </div>
        </div>
        </>
    )
}

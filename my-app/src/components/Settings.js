import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../styles/style.css'

export default function Settings() {

    const style = {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-start'
    }

    const navigate = useNavigate()

    function goAdd(e){
        e.preventDefault()
        navigate('/add')
    }

    function goUpdate(e){
        e.preventDefault()
        navigate('/update')
    }

    function goDelete(e){
        e.preventDefault()
        navigate('/delete')
    }

    return (
        <>
        <div style={style}>
            <h1>Settings</h1>
            <Button onClick={goAdd} variant="dark">Add Profile</Button>
            <br></br>
            <Button onClick={goUpdate} variant="dark">Update Profile</Button>
            <br></br>
            <Button onClick={goDelete} variant="dark">Delete Profile</Button>
            <br></br>
        </div>
        </>

    )
}




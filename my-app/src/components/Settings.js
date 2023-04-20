import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../styles/style.css'

export default function Settings() {

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
        <div className="settings-container">
            <div className="settings-buttons">
                <h1>Settings</h1>
                <Button onClick={goAdd} variant="dark">Add Settings</Button>
                <br></br>
                <Button onClick={goUpdate} variant="dark">Update Settings</Button>
                <br></br>
                <Button onClick={goDelete} variant="dark">Delete Settings</Button>
                <br></br>
            </div>
        </div>
        </>

    )
}




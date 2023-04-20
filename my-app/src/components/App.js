import { HashRouter, Routes, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import Add from './Add.js'
import Delete from './Delete.js'
import Update from './Update.js'
import Settings from './Settings.js'
import Signup from './Signup.js'
import Login from './Login.js'
import Home from './Home.js'
import { UserAuthContextProvider } from '../context/UserAuthContext.js';
import '../styles/style.css'
import PrivateRoute from './PrivateRoute.js';
import About from './About.js'

function App() {
  return (
    <div className="box" style={{fontFamily: "ptsans"}}>
        <div>
          <HashRouter>
            <UserAuthContextProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              } 
              />
                <Route path="/add" element={<Add />} />
                <Route path="/delete" element={<Delete />} />
                <Route path="/update" element={<Update />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </UserAuthContextProvider>
          </HashRouter>
          </div>
      </div>
  );
}

export default App;



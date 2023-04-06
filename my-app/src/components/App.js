import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <>
    {/* <video id="background-vid" autoPlay loop muted>
      <source src="https://www.vecteezy.com/video/1626819-blurry-light-traffic-jam-at-night" type="video/mov"/>
    </video> */}
    {/* <Home /> */}
    <div className="box" style={{fontFamily: "ptsans"}}>
      <div>
        <div>
          <Router>
            <UserAuthContextProvider>
              <Routes>
                <Route path="/commuter-clock-web" element={<Home />} />
                <Route path="/commuter-clock-web/settings" element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              } 
              />
                <Route path="/update" element={<Update />} />
                <Route path="/delete" element={<Delete />} />
                <Route path="/add" element={<Add />} />
                <Route path="/commuter-clock-web/login" element={<Login />} />
                <Route path="/commuter-clock-web/signup" element={<Signup />} />
              </Routes>
            </UserAuthContextProvider>
          </Router>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;



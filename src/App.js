import './App.css';
import LandingPage from './Pages/Landingpage/Landing_page';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
    <div className="App">
    <Router>
    {/* <TopNavbar/> */}
          <Routes>
            <Route exact path="/home" element={<LandingPage/>} />
            {/* <Route exact path="/menu" element={<MenuPage/>} />
            <Route exact path="/contact" element={<ContactusPage/>} />
            <Route exact path="/about"   element={<AboutusPage/>}/> */}
            <Route exact path="/" element={<Navigate to="/home" />} />
          </Routes>
        </Router>   
    </div>
    </>
    
  );
}

export default App;

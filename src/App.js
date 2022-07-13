
import './App.css';
import LandingPage from './Pages/Landing_page/Landing_page';
import MenuPage from './Pages/Menu_page/MenuPage';
import LocationPage from './Pages/Location_page/LocationPage';
import ContactusPage from './Pages/Contactus_page/ContactusPage';
 import Footer from '../src/Components/Footer/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AboutusPage from './Pages/Aboutus_page/AboutusPage';
import TopNavbar from './Components/TopNavbar/Topnavbar';

function App() {
  return (
    <>
    <div className="App">
    <Router>
    <TopNavbar/>
          <Routes>
            <Route exact path="/home" element={<LandingPage/>} />
            <Route exact path="/menu" element={<MenuPage/>} />
            <Route exact path="/location" element={<LocationPage/>} />
            <Route exact path="/contact" element={<ContactusPage/>} />
            <Route exact path="/about"   element={<AboutusPage/>}/>
            <Route exact path="/" element={<Navigate to="/home" />} />
          </Routes>
          <Footer/>
        </Router>
      {/* <TopNavbar></TopNavbar>
      <div>
      <LandingPage></LandingPage>
      </div> */}
        {/* <Footer/> */}
       
    </div>
    </>
    
  );
}

export default App;

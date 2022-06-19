
import './App.css';
import TopNavbar from './Components/Top_navbar/Top_navbar';
import LandingPage from './Pages/Landing_page/Landing_page';
import Footer from './Components/Footer/Footer.js'

function App() {
  return (
    <>
    <div className="App">
      <TopNavbar></TopNavbar>
        <LandingPage></LandingPage>
        <div>
        <Footer></Footer>
        </div>
        
    </div>
    </>
    
  );
}

export default App;

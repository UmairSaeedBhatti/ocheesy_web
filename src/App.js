
import './App.css';
import TopNavbar from './Components/Top_navbar/Top_navbar';
import LandingPage from './Pages/Landing_page/Landing_page';
import Footer from '../src/Components/Footer/Footer'

function App() {
  return (
    <>
    <div className="App">
      <TopNavbar></TopNavbar>
        <LandingPage></LandingPage>
        <Footer/>
    </div>
    </>
    
  );
}

export default App;

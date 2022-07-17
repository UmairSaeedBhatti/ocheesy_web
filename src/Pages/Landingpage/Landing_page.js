import'./Landing_page.css'
// import Card from '../../Components/Card/Card'
// import tasty from '../../images/tasty-homemade-donut-bagel.jpg'
import TopNavbar from '../../Components/TopNavbar/Topnavbar'
import Aboutus from '../../Components/Aboutus/Aboutus'
import MenuNavbar from '../../Components/MenuNavbar/Menunavbar'
import ContactUs from '../../Components/ContactUs/Contactusform'
import TimeLocation from '../../Components/TimeLocation/Timelocation'
import Footer from '../../Components/Footer/Footer'
import {useState} from "react"

function LandingPage(){ 
    const [active , setActive] = useState("menu")
     
    return(
        <>
        <TopNavbar setActive={setActive}/>
          <div className="image-container">
            <img className="hero-image" src="./images/Hero_image.jpg" alt="pizza"></img>
            <div className="hero-text">
            <h1 className="hero-text__heading">Welcome to the o'chessy</h1>
            <p className="hero-text__Description">Pakistani</p>
            <button className="hero-btn">View Menu</button>
            </div>
         </div>
         <div className="layout-container">
          {active === "menu" && <MenuNavbar/>}
          {active === "about" && <Aboutus/>}
          {active === "contactus" && <ContactUs/>}
          {active === "timelocation" && <TimeLocation/>}
          {/* <h1>Special indian pakistani</h1> */}
            {/* <Card image={tasty} description="Description text here"/>
            <Card image={tasty} description="second card"/>
            <Card image={tasty} description="Third card"/> */}
            <br/>
            <Footer/>
         </div>
        
        </>
    )
}

export default LandingPage;
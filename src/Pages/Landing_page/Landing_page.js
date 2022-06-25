import Aboutus from '../../Components/Aboutus_text/Aboutus';
//import MenuNavbar from '../../Components/Menu_navbar/Menu_navbar';
import'./Landing_page.css'
import Footer from '../../Components/Footer/Footer.js'
import ContactUs from '../../Components/Contact_us/Contactus_form';
import MenuNavbar from '../../Components/Menu_navbar/Menu_navbar';
import Card from '../../Components/Card/Card'
import tasty from '../../images/tasty-homemade-donut-bagel.jpg'

function LandingPage(){
    return(
        <>
          <div className="image-container">
            <img className="hero-image" src="./images/Hero_image.jpg" alt="pizza"></img>
            <div className="hero-text">
            <h1 className="hero-text__heading">Welcome to the o'chessy</h1>
            <p className="hero-text__Description">Pakistani</p>
            <button className="hero-btn">View Menu</button>
            </div>
         </div>
         <div className="layout-container">
          <h1>Special indian pakistani</h1>
            <Card image={tasty}/>
            <MenuNavbar/>
            <ContactUs/>
            <br></br>
            <br></br>
            <Aboutus/>
            <Footer/>
            {/* <MenuNavbar></MenuNavbar> */}
         </div>
        </>
    )
}

export default LandingPage;
import Aboutus from '../../Components/Aboutus_text/Aboutus';
//import MenuNavbar from '../../Components/Menu_navbar/Menu_navbar';
import'./Landing_page.css'
import Footer from '../../Components/Footer/Footer.js'
import ContactUs from '../../Components/Contact_us/Contactus_form';

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
            <Aboutus></Aboutus>
            <ContactUs></ContactUs>
            <hr></hr>
            <Footer></Footer>
            {/* <MenuNavbar></MenuNavbar> */}
         </div>
        </>
    )
}

export default LandingPage;
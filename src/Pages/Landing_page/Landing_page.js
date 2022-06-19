import MenuNavbar from '../../Components/Menu_navbar/Menu_navbar';
import './Landing_page.css'


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
            <h1>Spacial indian pakistani</h1>
            <MenuNavbar></MenuNavbar>
         </div>
        </>
    )
}

export default LandingPage;
import'./Landing_page.css'
import Card from '../../Components/Card/Card'
import tasty from '../../images/tasty-homemade-donut-bagel.jpg'
import TopNavbar from '../../Components/Top_navbar/Top_navbar';

function LandingPage(){
    return(
        <>
        <TopNavbar/>
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
            <Card image={tasty} description="Description text here"/>
            <Card image={tasty} description="second card"/>
            <Card image={tasty} description="Third card"/>
            <br></br>
            <br></br>
         </div>
        </>
    )
}

export default LandingPage;
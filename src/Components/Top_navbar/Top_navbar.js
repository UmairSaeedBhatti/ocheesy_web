import './Top_navbar.css'

function TopNavbar(){
    return(
        <>
          <nav className="top-navbar">
          <ul className="top-navbar__menu">
          <li className="top-navbar__menuitem" >Home</li>
          <li className="top-navbar__menuitem">Menu</li>
          <li className="top-navbar__menuitem">Aboutus</li>
          <li className="top-navbar__menuitem">Contact us</li>
           </ul>
           </nav>
        </>
    )
}

export default TopNavbar;
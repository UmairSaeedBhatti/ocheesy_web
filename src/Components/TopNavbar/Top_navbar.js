import { Link } from 'react-router-dom'
import './Top_navbar.css'

function TopNavbar(){
    return(
          <nav className="top-navbar">
          <ul className="top-navbar__menu">
          <li className="top-navbar__menuitem" >
          <Link to="/Home" className='top-navbar__menuitem'>Home</Link>
          </li>
          <li className="top-navbar__menuitem">
          <Link to="/menu" className='top-navbar__menuitem'>Menu</Link>
            </li>
          <li className="top-navbar__menuitem">
            <Link to="/about" className='top-navbar__menuitem'>About us</Link>
          </li>
          <Link to="/login" className='top-navbar__menuitem'>Contact us</Link>
           </ul>
           </nav>
    )
}

export default TopNavbar;



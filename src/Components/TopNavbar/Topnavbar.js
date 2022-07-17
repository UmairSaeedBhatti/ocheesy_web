import './Topnavbar.css'

function TopNavbar({setActive}){
    return(
          <nav className="top-navbar">
          <ul className="top-navbar__menu">
          <li className="top-navbar__menuitem" onClick={()=>setActive("Home")}>Home</li>
          <li className="top-navbar__menuitem" onClick={()=>setActive("menu")}>Menu</li>
          <li className="top-navbar__menuitem" onClick={()=>setActive("about")}>About us</li>
          <li className='top-navbar__menuitem' onClick={()=>setActive("contactus")}>Contact us</li>
          <li className='top-navbar__menuitem' onClick={()=>setActive("timelocation")}>Timelocation</li>
           </ul>
        </nav>
    )
}

export default TopNavbar;



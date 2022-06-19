import './Menu_navbar.css'
import Menudata from '../../Data/Menu_data/Menu_data.json'

function MenuNavbar(){
    return(
        <>
          <div className="Menu_container">
              {
                Menudata.map(menutitle =>{
                    return(
                        <button className="Menubtn">
                               {menutitle.Menu}
                        </button>
                          
                    )
                })
              }
          </div>
        </>
    )
}


export default MenuNavbar
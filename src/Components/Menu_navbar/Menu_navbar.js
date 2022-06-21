import './Menu_navbar.css'
import Menudata from '../../Data/Menu_data/Menu_data.json'

function MenuNavbar(){
    return(
        <>
        <div>
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
          <div className="Menulist_container">
               <div className="Menulist-container__image">image here</div>
               <div className="Menulist-container_list">
                  <h1>Menu</h1>
                  <div className="">
                      <div>
                          
                      </div>
                  </div>
               </div>
          </div>
          </div>
        </>
    )
}


export default MenuNavbar
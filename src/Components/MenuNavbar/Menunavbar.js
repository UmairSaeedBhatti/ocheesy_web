import './Menunavbar.css'
import Menudata from '../../Data/Menu_data/Menu_data.json'


function MenuNavbar(){
    return(
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
                  <h1>NOS BARQUETTES</h1>
                  <div className="">
                      <div>
                          <div>
                               <p>nuggets</p>
                               <p>Description</p>
                          </div>
                          <div>
                               <p>3.0</p>
                          </div>
                      </div>
                  </div>
               </div>
          </div>
          </div>
    )
}


export default MenuNavbar
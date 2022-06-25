import './Card.css'



function Card({image}){
    return(
        <>
             <div className="Card-Container">
                  <div className="image">
                        <img src={image} alt="pizza" className="imagestyle"></img>
                  </div>
                  <div className="Description">
                         <h3>Description</h3>
                  </div>
             </div>
        </>
    )
}


export default Card
import './Card.css'



function Card({image , description}){
    return(
        <>
             <div className="Card-Container">
                        <img src={image} alt="pizza" className="imagestyle"></img>
                  <div className="Description">
                         <h3>{description}</h3>
                  </div>
             </div>
        </>
    )
}


export default Card
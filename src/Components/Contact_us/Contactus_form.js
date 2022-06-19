import './Contactus_form.css'



function ContactUs(){
    return(
        <>
        <div className="Contact-us">
            <h1>Contact us</h1>
        <form>
          <div>
            <input
              className="inputfield"
              type="text"
              name="Name"
              placeholder="Your Name"
            ></input>
          </div>
          <div>
            <input
              className="inputfield"
              type="text"
              placeholder="Email"
              name="Email"
              id="Email"
            ></input>
          </div>
          <div>
            <input
              className="inputfield"
              type="text"
              placeholder="Contact Number"
              name="Contact_number"
              id="contact_number"
            ></input>
            <div>
            <textarea className="inputfield Message-area" placeholder="Message">
               
               </textarea>
            </div>
            
          </div>
          <button className="Contactus-us__btn" type="Submit">
            Submit
          </button>
        </form>
      </div>
        </>
    )
}



export default ContactUs
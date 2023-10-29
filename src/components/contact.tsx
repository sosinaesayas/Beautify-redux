import React from 'react'
import "./contact.css"
import { FaPhone,FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
const Contact = () => {
  return (
    <div>
      <div className='first-part'>
        <p className='first-p'>Let's get in touch!</p>
        <div className='support-contact'>
           <div className='support-contact-container'>
             <div className='contact-with-icon'>
              <FaPhone className='icon' size={20} style={{color:"gray"}}/>
              <p>Phone</p>
             </div>
             <p>Mobile : (+88) 872-670-780</p>
             <p>Mobile : (+88) 872-670-780</p>
           </div>
           <div className='support-contact-container'>
              <div className='contact-with-icon'>
                <FaEnvelope className='icon'/>
                <p>Email</p>
              </div>
              <p>Info@example.com</p>
              <p>Info@example.com</p>
           </div>
           <div className='support-contact-container'>
            <div className='contact-with-icon'>
            <FaMapMarkerAlt className="icon"/>
            <p>Location</p>
            </div>
            <p>Addis Ababa, Ethiopia</p>
           </div>
           </div>
              
      </div>
           <div className='second-part'>
            Don't be afraid to contact us!
           </div>
           <div className='third-part'>
            <form className='message-form'>
              <input className='name' placeholder='Name'/>
              <input className='phon' placeholder='Phone'/>
              <input className='email' placeholder='Email'/>
              <input className='subject' placeholder='Subject'/>
              <input className='message' placeholder='Message'/>
              <button className='submit' type="submit">Submit</button>
            </form>
           </div>
           
           

    
    </div>
  )
}

export default Contact
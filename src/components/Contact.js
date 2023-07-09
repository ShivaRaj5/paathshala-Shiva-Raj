import React from 'react'
import PostContent from './PostContent'
import ContactImg from '../images/contactimg.jpg'
const Contact = () => {
  return (
    <>
      <div className="contact" style={{backgroundColor:'whitesmoke'}}>
        <div className="contactContainer">
          <h1 style={{fontSize:'50px'}}>Feel Free To Contact Us</h1>
          <img src={ContactImg} alt="img" style={{width:'915px',height:'450px',margin:'50px 0px'}}/>
          <h2 style={{fontWeight:'lighter'}}>We would love to hear from you! Whether you have questions, suggestions, or just want to say hello, feel free to reach out to us. Our team is dedicated to providing the best experience for our readers and community.</h2>
          <p style={{margin:'30px 0px'}}>To get in touch, you can use the contact form below. Simply fill in your name, email address, and message, and we will respond to you as soon as possible. We value your feedback and appreciate any thoughts or ideas you have to share. You can also connect with us on social media. Follow us on Twitter, Facebook, and Instagram to stay updated with our latest articles, announcements, and community discussions.</p>
          <div className="contactInfo">
            <div className="addressInfo">
              <h2>Where To Find Us</h2>
              <p>Through Websites</p>
              <p>Through Social Media</p>
              <p>Through Community Forums</p>
            </div>
            <div className="addressInfo">
              <h2>Contact Info</h2>
              <p>Email - xyz@gmail.com</p>
              <p>Phone - 9876543xyz</p>
              <p>LinkedIn - linkedin.com/in/xyz</p>
            </div>
            <div className="addressInfo">
              <h2>Our Offices</h2>
              <p>Noida, India</p>
              <p>Delhi, India</p>
              <p>Bengaluru, India</p>
            </div>
          </div>
          <form method="post">
            <h1>Contact Us</h1>
            <input type="text" placeholder='Your Name' />
            <input type="text" placeholder='Your Email' />
            <input type="text" placeholder='Your Phone' />
            <textarea name="message" id="" cols="30" rows="6" placeholder='Your Message'></textarea>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
      <PostContent/>
    </>
  )
}

export default Contact
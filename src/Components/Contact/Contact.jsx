import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linkedin from '../../assets/linkedin.png'



const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);


    formData.append("access_key", "xxxxxxxxxxxxxxxxxxxxxxxx");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    
      alert(res.message);
    
  };


  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        <h2 className='contact-text'>Get in touch</h2>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /><p><a className='link' href="mailto:mythilisaminathan2501@gmail.com">mythilisaminathan2501@gmail.com</a></p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p> <a className='link' href='#'>9944xxxxxx</a></p>
                </div>
                <div className="contact-detail">
                    <img src={linkedin} alt="" /> <p><a className='link' href="https://www.linkedin.com/in/mythili-saminathan/">mythili-saminathan</a></p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>Tamil Nadu,Salem</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
           
        </form>
      </div>
    </div>
  )
}

export default Contact

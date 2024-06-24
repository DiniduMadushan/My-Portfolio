import React, { useRef } from 'react'
import './contact.css';
import Walmart from '../../assests/walmart.png';
import Adobe from '../../assests/adobe.png';
import Microsoft from '../../assests/microsoft.png';
import Facebook from '../../assests/facebook.png';
import FacebookIcon from '../../assests/facebook-icon.png';
import TwitterIcon from '../../assests/twitter.png';
import YoutubeIcon from '../../assests/youtube.png';
import InstagramIcon from '../../assests/instagram.png';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_qb8imxa', 'template_cik6i0j', form.current, {
            publicKey: 'M9k0CmW1ckfsqcLuk',
          })
          .then(
            () => {
              alert("email is sent !");
              e.target.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
   <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients list</h1>
            <p className="clientDesc">
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            </p>
            <div className="clientImgs">
                <img src={Walmart} alt="walmart" className="clientImg" />
                <img src={Adobe} alt="adobe" className="clientImg" />
                <img src={Microsoft} alt="microsoft" className="clientImg" />
                <img src={Facebook} alt="facebook" className="clientImg" />
            </div>
        </div>

        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill the form below</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" name="from_name" placeholder='Your name'/>
                <input type="email" className="email" name="from_email" placeholder='Your Email'/>
                <textarea name="message" rows="5" className="msg" placeholder='Your message'></textarea>
                <button type='submit' value="send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="fb" className="link" />
                    <img src={TwitterIcon} alt="twitter" className="link" />
                    <img src={YoutubeIcon} alt="utube" className="link" />
                    <img src={InstagramIcon} alt="insta" className="link" />
                </div>
            </form>

        </div>
   </section>
  )
}

export default Contact

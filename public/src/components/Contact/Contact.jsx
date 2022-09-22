import React from 'react';
import './Contact.scss';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact  = () =>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3t9ytj1', 'template_up9jt7f', form.current, 'WGAe1GYp6AvKKPmDu')
          
        e.target.reset()
        };
    return(
        <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

         <div className="container contact__container">
            <div className="contact__options">
               <article className='contact__option'>
                <MdOutlineEmail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>odun4code@gmail.com</h5>
                <a href="mailto:odun4code@gmail.com" target="_blank"> Send a Message</a>
                </article> 

                <article className='contact__option'>
                 <RiMessengerLine className='contact__option-icon'/>
                <h4>Messenger</h4>
                <h5>Sakirat Oketoye</h5>
                <a href="https://m.me/profile.php?id=100083366096639&sk=about" target="_blank"> Send a Message</a>
                </article> 

                <article className='contact__option'>
                <BsWhatsapp className='contact__option-icon'/>
                <h4>WhatsApp</h4>
                <h5>070338958</h5>
                <a href="https://api.whatsapp.com/send?phone=07033895846" target="_blank"> Send a Message</a>
                </article> 
            </div>
            {/* End of contact options */}
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder='Your Full Name' required />
                <input type="email" name="email" placeholder='Your Email' required />
                <textarea name='message' rows='7' placeholder='Your Message' required />
                <button type='submit' className='btn btn-primary' href= "mailto:odun4code@gmail.com" target="_blank">Send Message</button>
            </form>
         </div>
      

        </section>
    )
}

export default Contact;
import React from 'react'
import "./Contact.css"
import {HiOutlineMail} from "react-icons/hi"
import {BsInstagram} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from "emailjs-com"

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xf2dy2a', 'template_fokvd5d', form.current, 'aTyFXwDM_TRj1Z3z_')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
      };
    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <HiOutlineMail className='contact__option__icon'/>
                        <h4>Email</h4>
                        <h5>shaikshameer987@gmail.com</h5>
                        <a href='mailto:shaikshameer987@gmail.com'>Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <BsInstagram className='contact__option__icon'/>
                        <h4>Instagram</h4>
                        <h5>shaik shameer basha</h5>
                        <a href='https://www.instagram.com/shaik_shameer_basha/' target="new">Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option__icon'/>
                        <h4>Whatsapp</h4>
                        <h5>+917989094574</h5>
                        <a href=' https://wa.me/+917989094574' target="new">Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input placeholder='Your Full Name' name='name' type="text" required/>
                    <input placeholder='Your Email' name='email' type="email" required/>
                    <textarea name='message' rows="7" placeholder='Your Message'/>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
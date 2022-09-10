import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>

                        <a href="mailto:azimugv@gmail.com" className='contact__btn' target="_blank">Send Email</a>
                    </article>


                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>

                        <a href="https://m.me/azimugv" className='contact__btn' target="_blank">Knock on Messenger</a>
                    </article>


                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>

                        <a href="https://api.whatsapp.com/send?phone=01722201626" className='contact__btn' target="_blank">Knock on WhatsApp</a>
                    </article>

                </div>
                <form action="">
                    <input type="text" name="name" id="" placeholder='Your Full Name' required />
                    <input type="email" name="email" id="" placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
import React, { useState } from 'react'
import "./Contact.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';
import { useContext } from 'react';

function Contact() {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    const form = useRef();

    const [done, setDone] = useState(false)



    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4og5kxl', 'template_fztpc8g', form.current, 'Wf1dy_XQ4bHSs1hIr')
            .then((result) => {
                console.log(result.text);
                setDone(true)
                form()
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='contact-form' id='Contact'>
            <div className="w-left">
                <div className="awesome">
                    <span style={{ color: darkMode ? 'white' : ' ' }}>Get In Touch</span>
                    <span>Contact Me</span>
                    <div className="blur2 s-blur1 "></div>

                </div>
            </div>

            <div className="c-right">
                <form action="" ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' className='user' placeholder='Name' />
                    <input type="email" name='user_email' className='user' placeholder='Email' />
                    <textarea name="message" className='user' placeholder='Message'></textarea>
                    <input type="submit" value="send" className='button' />
                    <span>
                        {
                            done && "Thanks for Contacting me..."
                        }
                    </span>
                    <div className="blur c-blur1"></div>
                </form>
            </div>

        </div>
    )
}

export default Contact
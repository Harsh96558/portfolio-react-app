import React from 'react'
import "./Footer.css"
import Wave from "../../img/wave.png"
import Instagram from "@iconscout/react-unicons/icons/uil-instagram"

import Github from "@iconscout/react-unicons/icons/uil-github"

function Footer() {
    return (
        <div className='footer'>
            <img src={Wave} alt="" />
            <div className="f-content">
                <span>atul.rajput.96558@gmail.com</span>
                <div className="f-icon">


                    <a href="https://github.com/Harsh96558" target='_main'>
                        <Github className="icon" />
                    </a>

                    <a href="https://www.instagram.com/_r.a.z.p.o.o.t_/" target='_main'>
                        <Instagram className="icon" />
                    </a>


                </div>

            </div>
        </div>
    )
}

export default Footer
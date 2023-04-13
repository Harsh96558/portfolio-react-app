import React from 'react'
import "./Intro.css"
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import glassesimoji from "../../img/glassesimoji.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion'


function Intro() {

    const transition = { duration: 2, type: 'spring' }
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode


    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : ' ' }}>Hy! I Am </span>
                    <span>Harsh Rajput</span>
                    <span>Frontend Developer with Experience in Web designing and development , producting the quality  work  </span>

                </div>
                <button className="button i-button">Hire Me</button>
                <div className="i-icon">
                    <a href="https://github.com/Harsh96558" target='_main'>
                        <img src={Github} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/harsh-rajput-52bb88216/" target='_main'>
                        <img src={LinkedIn} alt="" />
                    </a>
                    <a href="https://www.instagram.com/_r.a.z.p.o.o.t_/" target='_main'>
                        <img src={Instagram} alt="" />
                    </a>



                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}

                    src={glassesimoji} alt="" />

                <motion.div
                    initial={{ left: "74%", top: '-4%' }}
                    whileInView={{ left: "68%" }}
                    transition={transition}

                    className='i-floating1' >
                    <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
                </motion.div>

                <motion.div
                    initial={{ left: "9rem", top: '18.2rem' }}
                    whileInView={{ left: "3.2rem" }}
                    transition={transition}

                    className='i-floating2' >
                    <FloatingDiv image={thumbup} txt1="Best " txt2="Design" />
                </motion.div>
                {/* (Blue divs) */}

                <div className='blur'></div>
                <div className='blur2'></div>
            </div>



        </div>
    )
}

export default Intro
import React from 'react'
import "./Services.css"
import Heartemoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from "./Resume.pdf"
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion'



function Services() {
    const transition = { duration: 2, type: 'spring' }
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className='services' id='Services'>
            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : ' ' }} >My Awesome</span>
                <span>services</span>
                <span>Lorem ipsum dolor sit amet  elit. Molestiae, laudantium! Dolor, magn
                    <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                </span>
                <a href={Resume} download>
                    <button className="button s-button"> Download CV</button>
                </a>

                <div className="blur2 s-blur2"></div>

            </div>
            {/* Right side */}
            <div className="cards">
                <motion.div
                    initial={{ left: "34rem" }}
                    whileInView={{ left: "25rem" }}
                    transition={transition}
                    className="imgcard1">
                    <Card
                        emoji={Heartemoji}
                        heading={"Design"}
                        detail={"Figma, Photoshop Html,Css,JavaScript,Tailwind"}

                    />

                </motion.div>
                <div className="imgcard2">
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"Html,Css,JavaScript,Tailwind Css,BootStrap,ReactJs,Redux"}

                    />

                </div>

                <motion.div
                    initial={{ left: "30rem" }}
                    whileInView={{ left: "22rem" }}
                    transition={transition}
                    className="imgcard3">
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={"Lorem ipsum dolor sit amet  elit. Molestiae, laudantium! Dolor, magn"}

                    />
                    <div className="blur s-blur3"></div>

                </motion.div>




            </div>

        </div>
    )
}

export default Services
import React from 'react'
import "./Works.css"
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion'

function Works() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className='works'>
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : ' ' }}>Want to Work for All these</span>
        <span>Brands & clients</span>
        <span>Lorem ipsum dolor sit amet  elit. Molestiae, laudantium! Dolor, magn
          <br />
          Lorem ipsum, dolor sit.
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing.
          <br />
          Lorem ipsum dolor sit amet consectetur.
        </span>

        <button className="button s-button"> Hire Me</button>


        <div className="blur2 s-blur2"></div>

      </div>
      {/* Right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 2, type: 'spring' }}
          className="w-maincircle">
          <div className="w-seccircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-seccircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-seccircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-seccircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-seccircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* Background circle */}

        <div className="w-backcircle bluecircle"></div>
        <div className="w-backcircle yellowcircle"></div>
      </div>




    </div>
  )
}

export default Works
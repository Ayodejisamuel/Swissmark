import React, { useState } from 'react';
import hambugger from '../../images/hambugger.png'
import logo from '../../images/logo-mobile.png'
import './Banner.css';



const Banner = () => {

  const [navOpen, setNavOpen] = useState(false)
 
  const toggleNav  = ( ) => {
    setNavOpen(!navOpen)
  }
  return (

    <div id='Banner-container'>

 <img src={logo} alt={logo} className='mobile'></img>

      <div  className='toggle' onClick={toggleNav} >
        <img src={hambugger} alt={hambugger}   ></img>
      </div>


      <div className={`navbar ${navOpen ? 'visible' : ""}`}>

        <a href='#Banner-container'>Company</a>
        <a href='#intro-container'>Who we are </a>
        <a href='#service-container'>What we do</a>
        <a href='#connect-container'>Get in touch</a>
        <a href='#shop-container '>Shop</a>
        <a href=''>Solutions</a>
        <a href='#connect-container'>Our Clientele</a>
        <a href='#footer-container'>Blog</a>

      </div>
      
      <div className='description'>
        Your business and <span>home</span><br />
        <span>can be</span> effortlessly<br />
        <span> luxurious.</span>
      </div>

      <div className='learn'>
        <button className='learn-btn'>LEARN MORE</button>
        <p>It’s a state of the art we are committed to at Swissmarkk</p>
      </div>
    </div>
  );
};

export default Banner;
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

        <a href='#company'>Company</a>
        <a href='#who-we-are'>Who we are </a>
        <a href='#what-we-do'>What we do</a>
        <a href='#get-in-touch'>Get in touch</a>
        <a href='#shop'>Shop</a>
        <a href=''>Solutions</a>
        <a href='#client'>Our Clientele</a>
        <a href='#blog'>Blog</a>

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
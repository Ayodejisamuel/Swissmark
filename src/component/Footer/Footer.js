import React from 'react';
import './Footer.css'
import logoimg from '../../images/logo-img.png'
import likedln from '../../images/linkedln.png'
import frame from '../../images/insta.png'
import facebook from '../../images/Vector (1).png'
import twitter from '../../images/Vector.png'
import message from '../../images/whitemessage (1).png'
import location from '../../images/whitemessage (2).png'
import call from '../../images/whitemessage (3).png'
import calenderr from '../../images/whitemessage (4).png'
import arrow from '../../images/whitemessage (5).png'
 



const Footer = () => {
    return (

        <div id='blog'>
            <div className='footer-wrapper'>
                <div className='social-wrapper'>
                    <div><img src={logoimg} alt={logoimg} /></div>
                    <div className='care'>We are all about bringing a state of opulence to every business in Africa.</div>
                    <div className='social-icon'>
                        <img src={facebook} alt={facebook} />
                        <img src={twitter} alt={twitter} />
                        <img src={frame} alt={twitter} />
                        <img src={likedln} alt={likedln} />
                    </div>

                    <div className='socials'>
                        <div className='inner'>
                       <p><a className='' href='#company'>Company</a></p> 
                        <p><a href='#what-we-do'>Services</a></p>
                        </div>

                        <div className='inner'>
                        <p><a href='#shop'>Shop</a></p>
                            <p>Case Studies</p>
                        </div>

                        <div className='inner'>
                            <p>Knowledge base</p>
                            <p><a href='#get-in-touch'>Contact</a></p>
                        </div>
                    </div>
                </div>

                <div className='formdiv'>

                    <div className='emaildiv'>< img src={message} alt={message} width={22} height={16} className='emailimg' /> <input type='email' placeholder='Email Your Email Address'></input>< img src={arrow} alt={arrow} width={17} height={17} className='emailimgg' /></div><br />
                    <div className='imgcontactdivv'><img src={location} alt={location} className='imgcontactimgg' width={17} height={16} ></img> <span>6b Bendel Close, Off Bishop Aboyade Cole, Victoria Island, Lagos, Nigeria</span></div>
                    <div className='imgcontactdivv'><img src={call} alt={call} className='imgcontactimg' width={17} height={17} ></img> <a className='anchor' href='tel:+234-1 342 8350'>+234-1 342 8350</a></div>
                    <div className='imgcontactdivv'><img src={calenderr} alt={calenderr} className='imgcontactimg' width={17} height={17}  ></img> <span>8:00 – 6:00pm, Mon – Sat</span></div>
                    <div className='imgcontactdivv'><img src={message} alt={message} className='imgcontactimg' width={22} height={16}  ></img> <a className='anchor' href='mailto:info@swissmarkk.com'>info@swissmarkk.com</a></div>
                    <div className='copywright'>© 2020 SwissMarkk. All Rights Reserved.</div>

                </div>

            </div>
        </div>)
}


export default Footer;
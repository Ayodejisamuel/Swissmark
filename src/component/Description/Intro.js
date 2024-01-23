import React from 'react';
import './Intro.css'
import introimg from '../../images/introimg.jpg'
import arrow from '../../images/arrow.png'




const Intro = () => {
    return (
        <div id='intro-container'>

            <div className='itro-img-div'>
                <img src={introimg} className='intro-img' alt={'intro-img'}/> 
            </div>


             <div className='intro-description'> 
                <div className='who'>Who we are?</div>

                 <div className='mission'>Our Mission is to Bring a State of Opulence to every Business in <span>Africa.</span></div>
                <div className='business-container'>
                    
                    <p>Business, we think should evoke splendour and espouse that perfect ambiance where every corner smells, shines and look like the main area. This is what we call creating a wholesome environment. A state of opulence where you combine artistic excellence and technical mastery. It’s luxury at its highest level of perfection. </p>

                    <p>ike wholesome relationships, it’s a delicate balance and sublime match between sensitivity and practicality, emotions and deep insight, science and art. This, we have done for over a decade to develop innovative and cutting edge hygiene and ambiance solutions that will position your brand to be ten times ahead of competition.</p>

                    <p>Deeply embedded in our Company’s DNA is intricate craftsmanship, pensive art and distilled science of hygiene solutions development. Swissmarkk has partnered with industry leaders to provide an extensive range of premium cleaning products, custom Signature Scent design, natural Essential Oils and advanced Fragrance Diffusion Systems.</p>

                </div>

                <div className='more'><span >Read More</span><img src={arrow} alt={'more-icon'}/></div> 
             </div> 

        </div>
    )
}


export default Intro
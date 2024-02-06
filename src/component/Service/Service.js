import React from 'react';
import './Service.css'
import cardimg1 from '../../images/cardimg1.jpg'
import cardimg from '../../images/cardimg.jpg'
import airprone from '../../images/air-aroma.png'
import viprone from '../../images/VIPRONE.png'
import nilfik from '../../images/Nilfisk (1).png'


const Service = () => {
    return (

        <div id='service-container'>
            <div className='service-wrapper'><div>
                <h3>Our Service</h3>
                <div>At SwissMarkk, we provide wholesome hygiene and scenting solutions.</div>
            </div>

                <div className='card-div'>                    
                    <div className='card-wrapper'>
                        <img src={cardimg1} className='cardimg' width={300} height={200} alt={cardimg1} />
                        <p>Scenting</p>
                        <div className='business'>Let your business smell like it belongs to you. That’s the essence of scent marketing.</div>
                    </div>

                    <div className='card-wrapper'>
                        <img src={cardimg} className='cardimg' width={300} height={200} alt={cardimg1} />
                        <p>Scenting</p>
                        <div className='business'> Hygiene is a state of flawlessness. It’s a Standard you should attain. Learn why hygiene matters.</div>

                    </div>

                </div>
            </div>


            <div className='partners-container'>
                <div className='partners'>Partners</div>
                <div className='partners-imgdiv'>
                    <img src={nilfik}  alt={nilfik} />
                    <img src={airprone}  alt={airprone} />
                    <img src={viprone}  alt={viprone} />
                </div>
            </div>

        </div>
    )
}


export default Service;
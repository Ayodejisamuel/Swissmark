import React from 'react';
import './Connect.css'
import casa1 from '../../images/casa (1).png'
import casa2 from '../../images/casa (2).png'
import casa3 from '../../images/casa (3).png'
import map from '../../images/map-marker-alt.png'
import phone from '../../images/phone-alt.png'
import calender from '../../images/calendar-alt.png'
import contact from '../../images/Icon zocial-email.png'
import message from '../../images/message.png'
import person from '../../images/contact.png'

const Connect = () => {
    return (
        <div id='connect-container'>

            <div className='getintouchdiv'>

                <span className='get'>Get in touch</span>

                <div className='getwrapper'>
                    <div className='getwrapper-container'>

                        <div className='imgcontactdiv'><img src={map} alt={map} className='imgcontactimgg' width={17} height={17} ></img> <span>6b Bendel Close, Off Bishop Aboyade Cole, Victoria Island, Lagos, Nigeria</span></div>
                        <div className='imgcontactdiv'><img src={phone} alt={phone} className='imgcontactimg' width={17} height={17} ></img> <a href='tel:+234-1 342 8350'>+234-1 342 8350</a></div>
                        <div className='imgcontactdiv'><img src={calender} alt={calender} className='imgcontactimg' width={17} height={17}  ></img> <span>8:00 – 6:00pm, Mon – Sat</span></div>
                        <div className='imgcontactdiv'><img src={contact} alt={contact} className='imgcontactimg' width={22} height={16}  ></img> <a href='mailto:ayodejisamuel80@gmail.com  subject=information' >info@swissmarkk.com</a></div>

                    </div>

                    <div className='connectinput'>
                        <div className='getimgdiv'>< img src={person} width={17} height={17} className='getimg' /><input type='text' placeholder='Full Name'></input> <br /></div>
                        <div className='getimgdiv'>< img src={contact} width={22} height={16} className='getimg' /> <input type='email' placeholder='Email Address'></input></div><br />
                        <div className='getimgdiv'>< img src={phone} width={17} height={17} className='getimg' /><input type='number' placeholder='Phone Number '></input></div><br />
                        <div className='getimgdiv'>< img src={message} width={17} height={17} className='getimg' /><input type='text' placeholder='Your Message'></input></div><br />
                        <button className='send-btn'>SEND</button>
                    </div>
                </div>

            </div>


         <div id='clients-container'>
                <div className='clients'>Our Clients</div>
             <div className='clientsimg-div'>
                    <img src={casa2} width={100} alt={casa1} />
                    <img src={casa3} width={100} />
                    <img src={casa1} width={100} />
                </div> 
            </div>
        </div>
    )
}


export default Connect;
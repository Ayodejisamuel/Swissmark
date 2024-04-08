import React from 'react'
import './Shop.css'
import champaigne from '../../images/champagne_PNG17480 1.png'
import lamp from '../../images/lamp.png'
import perfume from '../../images/G013139 1.png'


const Shop = () => {
    return (
        <div id='shop'>
            <div className='shop-wrapper'>
                <h3>Shop</h3>
                <div>At SwissMarkk, we provide wholesome hygiene solutions.</div>
            </div>

            <div >
                <div className='card-divv'>
                    <div className='card-wrapperr'>
                        <img src={champaigne} className='cardimg' width={280} height={200} alt={champaigne} />
                        <p>Scenting</p>
                        <div className='business'>Create a wonderful love expression</div>
                      <span>N25,000</span>
                        <div className='buydiv'>
                            <button className='buy-btn' >Add to Cart</button>
                            <button className='buy-btnn'>Buy</button>
                        </div>
                    </div>
                    <div className='card-wrapperr'>
                        <img src={perfume} className='cardimg' width={280} height={200} alt={perfume} />
                        <p>Scenting</p>
                        <div className='business'>Create a wonderful love expression</div>
                      <span>N25,000</span>
                      <div className='buydiv'>
                            <button className='buy-btn' >Add to Cart</button>
                            <button className='buy-btnn'>Buy</button>
                        </div>
                    </div>
                    <div className='card-wrapperr'>
                        <img src={lamp} className='cardimg' width={280} height={200} alt={lamp} />
                        <p>Scenting</p>
                        <div className='business'>Create a wonderful love expression</div>
                      <span>N25,000</span>
                      <div className='buydiv'>
                            <button className='buy-btn' >Add to Cart</button>
                            <button className='buy-btnn'>Buy</button>
                        </div>
                      
                    </div>

                    <div className='card-wrapperr'>
                        <img src={lamp} className='cardimg' width={280} height={200} alt={perfume} />
                        <p>Scenting</p>
                        <div className='business'>Create a wonderful love expression</div>
                      <span>N25,000</span>
                      <div className='buydiv'>
                            <button className='buy-btn' >Add to Cart</button>
                            <button className='buy-btnn'>Buy</button>
                        </div>
                    </div>

                </div>
                
            </div>

            <button className='view-btn'>View More</button>
        </div>)
}



export default Shop 
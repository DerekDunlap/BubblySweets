import React from 'react'
import '../styles/Footer.css'


function Footer() {
    return (
        <div className='container-fluid' id='footer-container'>
            <div className='container-fluid' id='footer-header'>
                <h2>Bubbly Sweets Soaps</h2>
                <small>Handmade Soaps</small>
            </div>
            <div className='container-fluid' id='footer-body'>
                <div className='container-fluid' id='footer-body-div'>
                    <div id='contact-div'>
                        <h3>CONTACT</h3>
                        <ul id='contact-ul'>
                            <li>(678) 719-2317</li>
                            <li>Atlanta, GA</li>
                            <li><a href='mailto:bubblysweetssoap@gmail.com'>bubblysweetssoap@gmail.com</a></li>
                            <li><a href='https://www.instagram.com/bubblysweetssoap/'>Instagram: @bubblysweetssoap</a></li>
                        </ul>
                    </div>
                    <div id='contact-div'>
                        <h3>ORDERS</h3>
                        <ul id='contact-ul'>
                            <li><a>My account</a></li>
                            <li><a>Delivery information</a></li>
                            <li>Track my order</li>
                            <li><a>Help</a></li>
                        </ul>
                    </div>
                    <div id='contact-div'>
                        <h3>MOST POPULAR</h3>
                        <ul id='contact-ul'>
                            <li>Sea Shell</li>
                            <li>Midnight Lavender</li>
                            <li>Aloe Vera</li>
                            <li>Orange Zest & Flaxseed</li>
                        </ul>
                    </div>
                </div>
                <div id='footer-subscribe'>
                    <div className='form__group'>
                        <input type='email' className='form__field' placeholder='Enter your e-mail here' name='email' id='email' required />
                        <button className='form__button'>Send</button>
                    </div>
                </div>
            </div>
            <div className='container-fluid' id='footer-copyright'>
                <div className='container-fluid' id='copyright-section'>
                    <div id='copyright-div'>
                        <small>Terms of Use</small>
                        <small>Privacy</small>
                    </div>
                    <div>
                        <small>Payment Methods Here</small>
                    </div>
                    <div>
                        <small>&copy; Copyright 2021 Bubbly Sweets Soaps, All Rights Reserved</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

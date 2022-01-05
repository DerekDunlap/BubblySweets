import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import "../styles/Home.css";
import "../styles/Newsletter.css";
import BestSellers from './BestSellers';
import About from './About';

function Home() {
    const [displayNewsletter, setDisplayNewsletter] = useState(false);

    useEffect(() => {
        setDisplayNewsletter({
            displayNewsletter: true
        })
    }, []);

    const handleCloseNewsletter = () => {
        setDisplayNewsletter({
            displayNewsletter: false
        });
        console.log(document.getElementById('modal-background').style.display = 'none');
    };

    const newsletterModal = (
        <div className='modal fade' id='modal-background' onClick={handleCloseNewsletter}>
            <div className="modal-content" id="newsletter-modal">
                <div className="modal-body" id="newsletter-body">
                    <div className="input-group" id="newsletter-div-1">
                        <img id="newsletter-img" src="https://static.wixstatic.com/media/0a1260_c3ce40681f404dc4a34546c73bfa63db~mv2.jpg/v1/fill/w_59,h_60,al_c,q_80,usm_0.66_1.00_0.01/IMG_4657.webp" />
                    </div>
                    <div className="input-group" id="newsletter-div-2">
                        <div className="modal-header" id="newsletter-header">
                            <button onClick={handleCloseNewsletter} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <h3>Newsletter Message</h3>
                        <p className='newsletter-message'>Sign up today to receive all the latest<br />
                            news and updates on our products.
                        </p>
                        <div className='form__group'>
                            <input type='email' className='newsletter__form__field' placeholder='Enter your e-mail here' name='email' id='email' required />
                            <button className='form__button'>Send</button>
                        </div>
                        <input type='checkbox' />
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className='container-fluid' id='homepage'>
            <div className='home-header-container'>
                {displayNewsletter ? newsletterModal : null}
                <Carousel className='home-carousel' variant='dark'>
                    <Carousel.Item interval={6000}>
                        <img src="https://static.wixstatic.com/media/0a1260_31217c3259544e59bff411c0bf87e2a9~mv2.png/v1/fill/w_1743,h_600,al_c,q_90,usm_0.66_1.00_0.01/0a1260_31217c3259544e59bff411c0bf87e2a9~mv2.webp" className="d-block w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item interval={6000}>
                        <img src="https://static.wixstatic.com/media/0a1260_e4688e99326d4e39a5911900c7cd534a~mv2.png/v1/fill/w_1743,h_600,al_c,q_90,usm_0.66_1.00_0.01/0a1260_e4688e99326d4e39a5911900c7cd534a~mv2.webp" className="d-block w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item interval={6000}>
                        <img src="https://static.wixstatic.com/media/0a1260_999bbe8e6f5c47c5869e4808ba5e1285~mv2.png/v1/fill/w_1743,h_600,al_c,q_90,usm_0.66_1.00_0.01/0a1260_999bbe8e6f5c47c5869e4808ba5e1285~mv2.webp" className="d-block w-100" alt="..." />
                    </Carousel.Item>
                </Carousel>
            </div>
            <BestSellers />
            <About/>
        </div>
    )
}

export default Home

import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from 'react-bootstrap'
import '../styles/Navbar.css'

function Navigation() {
    return (
        <div className='container-fluid' id='header-container'>
            <div className='pre-header-container'>
                <div className='pre-header-div'>
                    <a className='pre-header-link' href='#'>bubblysweetssoap@gmail.com</a>
                </div>
                <div className='pre-header-div'>
                    <a className='pre-header-link' href='#'>Flash Sale! Limited Time Only!</a>
                </div>
                <div className='pre-header-div'>
                    <a className='pre-header-link' href='#'>My Account</a>
                </div>
            </div>
            <Navbar className='navbar'>
                <Container className='container'>
                    <Nav.Link>
                        Home
                    </Nav.Link>
                    <Nav.Link>
                        Shop
                    </Nav.Link>
                    <Navbar.Brand href="#home">
                        <img src="https://static.wixstatic.com/media/0a1260_c3ce40681f404dc4a34546c73bfa63db~mv2.jpg/v1/fill/w_59,h_60,al_c,q_80,usm_0.66_1.00_0.01/IMG_4657.webp" alt="IMG_4657.jpg" width='59px' height='60px' object-fit='contain' object-position='center center'></img>
                    </Navbar.Brand>
                    <Nav.Link>
                        About
                    </Nav.Link>
                    <Nav.Link>
                        Contact
                    </Nav.Link>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation
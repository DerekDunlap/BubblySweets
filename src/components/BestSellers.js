import React from 'react'
import '../styles/BestSellers.css'

function BestSellers() {
    return (
        <div className='container-fluid' id='best-sellers-container'>
            <h2>Top Sellers</h2>
            <div className='container-fluid' id='best-products-div'>
                <div className='product-box'>
                    <img src='https://static.wixstatic.com/media/0a1260_0c29b1d08f764a829c15a0aab0c93ad8~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/0a1260_0c29b1d08f764a829c15a0aab0c93ad8~mv2.webp'/>
                    <span>Handmade Soap, Packaging, Fragrances</span>
                    <button id='product-btn'>View Product</button>
                </div>
                <div className='product-box'>
                    <img src='https://static.wixstatic.com/media/0a1260_d20f61ffd9c14346984329b775654b1c~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/0a1260_d20f61ffd9c14346984329b775654b1c~mv2.webp'/>
                    <span>Handmade Soap, Packaging, Fragrances</span>
                    <button id='product-btn'>View Product</button>
                </div>
                <div className='product-box'>
                    <img src='https://static.wixstatic.com/media/0a1260_6cdb7151210c42bc999c982177ab0ed8~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/0a1260_6cdb7151210c42bc999c982177ab0ed8~mv2.webp'/>
                    <span>Handmade Soap, Packaging, Fragrances</span>
                    <button id='product-btn'>View Product</button>
                </div>
                <div className='product-box'>
                    <img src='https://static.wixstatic.com/media/0a1260_31217c3259544e59bff411c0bf87e2a9~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/0a1260_31217c3259544e59bff411c0bf87e2a9~mv2.webp'/>
                    <span>Handmade Soap, Packaging, Fragrances</span>
                    <button id='product-btn'>View Product</button>
                </div>
            </div>
        </div>
    )
}

export default BestSellers

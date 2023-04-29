import React from 'react';
import { Link } from "react-router-dom";

import '../styles/RelatedProducts.css';

function BestSellers() {
    return (
        <div className='container-fluid' id='related-products-container'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h2>Related Products</h2>
            <div className='container-fluid' id='best-products-div'>
                <div className='product-box'>
                    <img src='https://static.wixstatic.com/media/0a1260_0c29b1d08f764a829c15a0aab0c93ad8~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/0a1260_0c29b1d08f764a829c15a0aab0c93ad8~mv2.webp'/>
                    <span>Handmade Soap, Packaging, Fragrances</span>
                    <span>$8.00</span>
                    <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star "></span>
                    </div>
                </div>
                <div className='product-box'>
                    <img src='https://static.wixstatic.com/media/0a1260_d20f61ffd9c14346984329b775654b1c~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/0a1260_d20f61ffd9c14346984329b775654b1c~mv2.webp'/>
                    <span>Handmade Soap, Packaging, Fragrances</span>
                    <span>$8.00</span>
                    <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    </div>
                </div>
                <div className='product-box'>
                    <img src='https://static.wixstatic.com/media/0a1260_6cdb7151210c42bc999c982177ab0ed8~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/0a1260_6cdb7151210c42bc999c982177ab0ed8~mv2.webp'/>
                    <span>Handmade Soap, Packaging, Fragrances</span>
                    <span>$8.00</span>
                    <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star "></span>
                    </div>
                </div>
                <div className='product-box'>
                    <img src='https://static.wixstatic.com/media/0a1260_31217c3259544e59bff411c0bf87e2a9~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/0a1260_31217c3259544e59bff411c0bf87e2a9~mv2.webp'/>
                    <span>Handmade Soap, Packaging, Fragrances</span>
                    <span>$8.00</span>
                    <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star "></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSellers

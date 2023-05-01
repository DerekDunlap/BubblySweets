import React from 'react';

import "../styles/Merchandise.css"

function Merchandise(){
    return(
        <div className='container-fluid' id='merchandise-container'>
            <div className='container-fluid' id='vertical-img-container'>
                <img src="https://static.wixstatic.com/media/0a1260_0c29b1d08f764a829c15a0aab0c93ad8~mv2.jpg/v1/fill/w_600,h_700,al_c,q_80,usm_0.66_1.00_0.01/0a1260_0c29b1d08f764a829c15a0aab0c93ad8~mv2.webp" alt="IMG_4657.jpg" width='200px' height='230px' object-fit='contain' object-position='center center'></img>
                <img src="https://static.wixstatic.com/media/0a1260_0c29b1d08f764a829c15a0aab0c93ad8~mv2.jpg/v1/fill/w_600,h_700,al_c,q_80,usm_0.66_1.00_0.01/0a1260_0c29b1d08f764a829c15a0aab0c93ad8~mv2.webp" alt="IMG_4657.jpg" width='200px' height='230px' object-fit='contain' object-position='center center'></img>
                <img src="https://static.wixstatic.com/media/0a1260_0c29b1d08f764a829c15a0aab0c93ad8~mv2.jpg/v1/fill/w_600,h_700,al_c,q_80,usm_0.66_1.00_0.01/0a1260_0c29b1d08f764a829c15a0aab0c93ad8~mv2.webp" alt="IMG_4657.jpg" width='200px' height='230px' object-fit='contain' object-position='center center'></img>
            </div>
            <div className='container-fluid' id='main-product-img-container'>
                <img src="https://static.wixstatic.com/media/0a1260_0c29b1d08f764a829c15a0aab0c93ad8~mv2.jpg/v1/fill/w_600,h_700,al_c,q_80,usm_0.66_1.00_0.01/0a1260_0c29b1d08f764a829c15a0aab0c93ad8~mv2.webp" height='100%' object-fit='contain' object-position='center center'></img>
            </div>
            <div className='container-fluid' id='main-prod-descript-container'>
                <h1>Coconut Rose</h1>
                <span>$8.00</span>
                <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star-o"></span>
                </div>
                <p>
                An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut. Eu agam malorum nec. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div>
                    <button id='product-btn'>ADD TO CART</button>
                    <span class="fa fa-heart-o">ADD TO WISHLIST</span>
                </div>
                <div>
                    <span>SKU: 1</span>
                    <span>Category: Body Scrubs</span>
                    <span>Tags: Coconut, Rose, Fresh</span>
                </div>
            </div>
        </div>
    )
}

export default Merchandise;
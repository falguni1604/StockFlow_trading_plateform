import React from 'react'
function Hero() {
    return ( 
        <div className='container text-center mt-5'>
            <div className='row'>
                <h1>Zerodha Products</h1>
                <h3 className='text-muted'>Sleek, modern, and intuitive trading platforms</h3>
                <p>Check out our{" "}
                     <a href='' style={{textDecoration: 'none'}}>
                        investment offerings{" "}
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </p>
            </div>
        </div>
     );
}

export default Hero;
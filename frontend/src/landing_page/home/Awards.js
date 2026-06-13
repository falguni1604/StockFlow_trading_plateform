import React from 'react'
function Awards() {
    return (
        <div className = 'container'>
            <div className = 'row '>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg'/>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p>
                        2+ million Zerodha clients contributed to 15% of all Indian retail trading volumes in FY23, making us the largest stock broker in India.
                    </p>
                    <div className='row'>
                        <div className='col-6'>
                    <ul>
                        <li> 
                            <p>
                                Future and Options
                            </p>
                        </li>
                        <li>
                            <p>
                                Commodity derivatives
                            </p>
                        </li>
                        <li>
                            <p>
                                Currency derivatives
                            </p>
                        </li>
                    </ul>
                    </div>
                    <div className='col-6'>
                    <ul>
                        <li> 
                            <p>
                                Stocks & IPOs
                            </p>
                        </li>
                        <li>
                            <p>
                               Direct mutual funds
                            </p>
                        </li>
                        <li>
                            <p>
                                Bonds and Govt. Securities
                            </p>
                        </li>
                    </ul>
                    </div>
                    <img src='media\images\pressLogos.png'style={{width:"90%"}}/>


                    </div>
                    
                </div>
                
            </div>
    </div>
      );
}

export default Awards ;
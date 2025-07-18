 
import React from "react";

function Hero() {
    return ( <>
   
   <div className="container p-5">
    <div className="row text-center">
        <img src="media/homeHero.png" alt="Hero image" className="mb-5" />
    </div>
    <h1 className="mt-5">Invest in everything</h1>
    <p>online platforn to invest in stocks , derivatives, mutual funds, and more</p>
    <button className="p-2 btn btn-primary fs-5" style={{width: '20%', margin: '0 auto'}}>Signup Now</button>

   </div>
    </> );
}

export default Hero;
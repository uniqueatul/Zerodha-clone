import React from "react";
import Awords from "./Awords";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import States from "./States";
import Navbar from "../../../Navbar";
import OpenAccount from "../../../OpenAccount";
import Footer from "../../../Footer";

function HomePage() {
    return ( <>
    <Navbar/>
    <Hero/>
    <Awords/>
    <States/>
    <Pricing/>
    <Education/>
    <OpenAccount/>
    <Footer/>
    
    </> );
}

export default HomePage;
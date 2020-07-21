import React from "react";
import hero from "./hero.gif";
// import { Link, useHistory } from "react-router-dom";
import './App.css'
import useWebAnimations, {backInRight} from '@wellyshen/use-web-animations'

         
const Hero = () => {

    const {ref} = useWebAnimations({...backInRight})


    return(
        <div ref={ref}>
        <img src={hero} className="hero" alt="hero" />
        </div>    
    )
}


export default Hero;
         
         
                
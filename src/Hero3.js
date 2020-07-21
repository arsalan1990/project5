import React from "react";
// import { Link, useHistory } from "react-router-dom";
import './App.css'
import useWebAnimations from '@wellyshen/use-web-animations'


function Hero3 () {
    
    const {ref} = useWebAnimations({
        keyframes:[
            {transform: "translateY(0px)"},
            {transform: "translateY(10px)"}    
        ],
        timing: {
            duration:1000,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out"
        },
        
    })
    
        return(
                 <main>
                    <section >
                    <div className="service-container">
                        <div className="services-card service-three"></div>
                        
                        <div className="service-description" ref={ref}>
                            <h3>Support 24 hours.</h3>
                            <div>Tech support teams are responsible for handling installation errors,
                                 user issues and any other technical problem that prevents the customer 
                                 from using your product. In essence, tech support focuses on helping 
                                 customers to use a product more effectively.</div>
                        </div>
                      
                    </div>
                    </section>
                 </main>
            
        )
    }
    
         
export default Hero3;
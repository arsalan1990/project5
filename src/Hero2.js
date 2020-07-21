import React from "react";
// import { Link, useHistory } from "react-router-dom";
import './App.css'
import useWebAnimations from '@wellyshen/use-web-animations'


function Hero2 () {
    
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
                      <div className="services-card service-two"></div>
                      <div className="service-description" ref={ref}>
                          <h3>Clear &amp; Optimized Code.</h3>
                          <div> Code modification to improve code quality and efficiency. 
                                A program may be optimized so that it becomes a smaller size, 
                                consumes less memory, executes more rapidly, or performs fewer input/output operations.</div>
                      </div>
                    </div>
                
                    </section>
                 </main>
    
    
            
        )
    }
    


         
export default Hero2;
         
         
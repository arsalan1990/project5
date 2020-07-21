import React from "react";
//import { Link, useHistory } from "react-router-dom";
import './App.css'
import useWebAnimations from '@wellyshen/use-web-animations'


function Hero1 () {

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
                    <section className="services"> 
                    <h2>Why we should work together?</h2>
                         <div className="service-container">
                            <div className="services-card service-one"></div>
                             <div className="service-description" ref={ref}>
    
                        <h3>SEO Friendly Apps.</h3>
                    <div> Like any other SEO strategy, mobile apps also need the
                          right keywords to rank higher in search results. 
                          Find the right keywords using Google Keyword Planner or
                          some third-party ASO tool (e.g. App Radar) and strategically 
                          place it in your app's title and description.</div>
    
                            </div>
                        </div>
                
                    </section>
                 </main>
    
    
            
        )
    }
    


         
export default Hero1;
         
         

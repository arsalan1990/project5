import React, {useState} from "react";
// import hero from "../hero.gif";
import { Link, useHistory } from "react-router-dom";
import '../App.css'
import useWebAnimations, {flipInX } from '@wellyshen/use-web-animations'
import  Hero from '../Hero'
import Hero1 from "../Hero1";
import  Hero2 from '../Hero2'
import  Hero3 from '../Hero3'


const Main = () => {

    const [joined, setJoined] = useState("");
    const history = useHistory();


    // Animation
    const {ref} = useWebAnimations({...flipInX})

    const join = (e) =>{
        e.preventDefault();
        if(joined !== ""){
            let today = new Date();
            let date = today.getFullYear()+ '-' +(today.getMonth()+1) + '-' + today.getDate();
            history.push(`/thanks/${joined}`, date );
        }

    }



    return(
        <React.Fragment>
            <header>

                <div className="services">
                <Hero />
                </div>

                <div className="align" ref={ref}>
                    <h1>We build &amp; design <br/> web applications.</h1>
                        
                        <p>Kinetic typography, is the technical term for “moving text.” It's an 
                        animation technique that mixes movement and text to 
                        convey ideas and evoke emotion. </p>
                        
                    <Link to="/contact" style={{color:"white"}}>Get in touch</Link>
                </div>
          
            </header>


                <div>
                    <Hero1 />
                    
                    <Hero2 />

                    <Hero3 />
                
                
                    <section className="services">
                </section>

                    <h2>Join our newsletter to get the latest trends.</h2>

                    <form className="newsletter" onSubmit={join}>
                        <input type="email" placeholder="Your email goes here" onChange={(e) => setJoined(e.target.value)} />
                        <input type="submit"  value="Join Now!"/>
                    </form>
                
                
                </div>

                

                
            


        </React.Fragment>
    )
}


export default Main;
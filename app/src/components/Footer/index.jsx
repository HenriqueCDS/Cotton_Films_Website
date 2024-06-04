import "./footer.css";
import logo from "../../assets/logoFooter.png";
import arrowContact from "../../assets/arrowContact.svg";
import arrow from "../../assets/arrow.svg";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Footer() {
    
    return(
        <footer>
            <div className="footer" >
                <div className="image-logo" data-aos="fade-up" data-aos-duration="2500">
                    <img src={logo}/>
                </div>
                <div className="footer-text">
                    <div className="footer-span" data-aos="fade-right" data-aos-duration="2500">
                        <h1>HELLO@COTTONFILMS.COM</h1>
                        <span><b>Arthur Medeiros</b></span>
                    
                    </div>
                    <div className="footer-textbar" data-aos="fade-left" data-aos-duration="2500">
                        <span ><b>CTTN©</b></span>
                        <div className="footer-link" >
                        
                          <ul>
                             <li><img src={arrowContact}/>CONTACT</li>
                             <li><img src={arrow} className="arrow"/><a>INSTRAGRAM</a></li>
                             <li><img src={arrow} className="arrow"/><a>SAVVE</a></li>
                             <li><img src={arrow} className="arrow"/><a>DRIBBBLE</a></li>
                          </ul>

                        </div>
                      
                    </div>
                </div>
             
             

            </div>
        </footer>
    )
}
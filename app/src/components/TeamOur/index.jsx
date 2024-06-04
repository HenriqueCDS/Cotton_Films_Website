import "./TeamOur.css";
import logo from "../../assets/logo-ourTeam.png";
import img1 from "../../assets/ourTeamImg1.png";
import img2 from "../../assets/ourTeamImg2.png";
import img3 from "../../assets/ourTeamImg3.png";
import img4 from "../../assets/ourTeamImg4.png";
import icon from  "../../assets/ourTeamIcon.svg";
import verBio from "../../assets/verBio.svg";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default function TeamOur() {
    let component = useRef();

    useEffect(() => {
      let ctx = gsap.context(() => {
        gsap.to(".grid", {
          scrollTrigger: {
            trigger: ".ourTeam",
            start: "top top",
            pin: true,
            pinSpacing: false,
  
          }
        });
      }, component); // <- selector scoping
      return () => ctx.revert();
    }, []);
    gsap.registerPlugin(ScrollTrigger);
    return (
        <section className="grid" ref={component}>
            <div className="ourTeam">
                <div className="cards-team">
                    <div className="card"  data-aos="fade-down" data-aos-duration="2500">
                        <div className="card-image">
                            <img  src={img1} />
                            <a className="verBio" href="#"><img src={verBio} /></a>
                        </div>
                        <div className="card-text" >
                            <span>NAME OF PROJECT<br/>(2023 ‘.02)</span>
                            <span>DIRECT BY <br/>ARTHUR MEDEIROS</span>
                           
                        </div>
                    </div> 

                    <div className="card" data-aos="fade-up" data-aos-duration="2500">
                        <div className="card-image">
                            <img  src={img2} />
                            <a className="verBio" href="#"><img src={verBio} /></a>
                        </div>
                        <div className="card-text">
                            <span>NAME OF PROJECT<br/>(2023 ‘.02)</span>
                            <span>DIRECT BY <br/>ARTHUR MEDEIROS</span>
                        </div>
                    </div> 

                    <div className="card"  data-aos="fade-down" data-aos-duration="2500">
                        <div className="card-image">
                            <img  src={img3} />
                            <a className="verBio" href="#"><img src={verBio} /></a>
                        </div>
                        <div className="card-text" >
                            <span>NAME OF PROJECT<br/>(2023 ‘.02)</span>
                            <span>DIRECT BY <br/>ARTHUR MEDEIROS</span>
                           
                        </div>
                    </div> 

                    <div className="card" data-aos="fade-up" data-aos-duration="2500">
                        <div className="card-image">
                            <img  src={img4} />
                            <a className="verBio" href="#"><img src={verBio} /></a>

                        </div>
                        <div className="card-text">
                            <span>NAME OF PROJECT<br/>(2023 ‘.02)</span>
                            <span>DIRECT BY <br/>ARTHUR MEDEIROS</span>
                        </div>
                    </div> 
                </div>

                <div className="ourTeam-bot">
                    <div className="ourTeam-logo" data-aos="fade-right" data-aos-duration="2500">
                        <img  src={logo} />
                    </div>
                    <div className="ourTeam-icon" data-aos="fade-left" data-aos-duration="2500">
                        <img src={icon} />
                    </div>
                    
                </div>
            </div>
        </section>
    )
    
}
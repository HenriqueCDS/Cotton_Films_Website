import "./services.css";
import { useState } from 'react';
import logo from "../../assets/services-logo.png";
import img1 from "../../assets/servicesImage1.png";
import img2 from "../../assets/servicesImage2.png";
import img3 from "../../assets/servicesImage3.png";
import img4 from "../../assets/servicesImage4.png";
import buttonright from "../../assets/Galerybutright.svg";
export default function Services() {

    const [hovered, setHovered] = useState(img1);

    function handleMouseImg(img){
      setHovered(img);
    };
  
  

    return(
        <>
            <section className="grid">
                <div className="sevices" >
                    <div className="top">
                        <div className="image-logo"  data-aos="fade-down" data-aos-duration="1000">
                            <img src={logo}/>
                        </div>
                        <div className="image-services" data-aos="fade-left" data-aos-duration="1000" >
                            <img src={hovered}/>
                        </div>
                    </div>
                    <div className="mid">
                        <div className="table-selection">
                            <div className="seletor" onMouseEnter={ () => {handleMouseImg(img1)}} 
                                data-aos="fade-right" data-aos-duration="2000"  >
                                <span>// NAME OF SERVICE</span>
                                <span>01</span>
                                <img src={buttonright}/>
                            </div>
                            <div className="seletor"  onMouseEnter={ () => {handleMouseImg(img2)}} data-aos="fade-right" data-aos-duration="2000"  >
                                <span>// NAME OF SERVICE</span>
                                <span>02</span>
                                <img src={buttonright}/>
                            </div>
                            <div className="seletor" onMouseEnter={ () => {handleMouseImg(img3)}}  data-aos="fade-right" data-aos-duration="2000" >
                                <span>// NAME OF SERVICE</span>
                                <span>03</span>
                                <img src={buttonright}/>
                            </div>
                            <div className="seletor"  onMouseEnter={ () => {handleMouseImg(img4)}}  data-aos="fade-right" data-aos-duration="2000" >
                            <span>// NAME OF SERVICE</span>
                                <span>04</span>
                                <img src={buttonright}/>
                            </div>         
                        </div>
                    </div>

                    <div className="mid-card">
                        <div className="card"  data-aos="fade-up" data-aos-duration="2500">
                            <div className="top-card">
                                <span>countries</span>
                                <span>01</span>
                            </div>
                            <div className="bot-card">
                                <h1>08</h1>
                            </div>
                        </div>
                        <div className="card" data-aos="fade-up" data-aos-duration="1000">
                            <div className="top-card">
                                <span>Clientes</span>
                                <span>02</span>
                            </div>
                            <div className="bot-card">
                                <h1>+125</h1>
                            </div>
                        </div>
                        <div className="card" data-aos="fade-up" data-aos-duration="1000">
                            <div className="top-card">
                                <span>countries</span>
                                <span>01</span>
                            </div>
                            <div className="bot-card">
                                <h1>08</h1>
                            </div>
                        </div>
                        <div className="card" data-aos="fade-up" data-aos-duration="2500">
                            <div className="top-card">
                                <span>Clientes</span>
                                <span>02</span>
                            </div>
                            <div className="bot-card">
                                <h1>+125</h1>
                            </div>
                        </div>  
                    </div>




                    <div className="bot">
                        <div className="text" data-aos="fade-left" data-aos-duration="2500">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed a luctus metus. Morbi fermentum nulla vel nunc vulputate fringilla.
                            Etiam suscipit porttitor neque, in fringilla libero. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Sed a luctus metus. 
                            Morbi fermentum nulla vel nunc vulputate fringilla. 
                            Etiam suscipit porttitor neque, in fringilla libero.
                            </p>
                        </div>   
                    </div>
                </div>
            </section>   
        </>
        
    )
}
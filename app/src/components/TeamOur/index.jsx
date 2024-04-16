import "./TeamOur.css";
import logo from "../../assets/logo-ourTeam.png";
import img1 from "../../assets/ourTeamImg1.png";
import img2 from "../../assets/ourTeamImg2.png";
import img3 from "../../assets/ourTeamImg3.png";
import img4 from "../../assets/ourTeamImg4.png";
import icon from  "../../assets/ourTeamIcon.svg";
export default function TeamOur() {
    return (
        <section className="grid">
            <div className="our-team">
                <div className="cards-team">
                    <div className="card"  data-aos="fade-down" data-aos-duration="2500">
                        <div className="card-image">
                            <img  src={img1} />
                        </div>
                        <div className="card-text" >
                            <span>NAME OF PROJECT<br/>(2023 ‘.02)</span>
                            <span>DIRECT BY <br/>ARTHUR MEDEIROS</span>
                        </div>
                      
                    </div> 
                    <div className="card" data-aos="fade-up" data-aos-duration="2500">
                        <div className="card-image">
                            <img  src={img2} />
                        </div>
                        <div className="card-text">
                            <span>NAME OF PROJECT<br/>(2023 ‘.02)</span>
                            <span>DIRECT BY <br/>ARTHUR MEDEIROS</span>
                        </div>
                    </div> 
                    <div className="card"  data-aos="fade-down" data-aos-duration="2500"> 
                        <div className="card-image">
                            <img  src={img3} />
                        </div>
                        <div className="card-text">
                            <span>NAME OF PROJECT<br/>(2023 ‘.02)</span>
                            <span>DIRECT BY <br/>ARTHUR MEDEIROS</span>
                        </div>
                    </div> 
                    <div className="card" data-aos="fade-up" data-aos-duration="2500">
                        <div className="card-image">
                            <img  src={img4} />
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
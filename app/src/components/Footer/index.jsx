import "./footer.css";
import logo from "../../assets/logoFooter.png";
import arrowContact from "../../assets/arrowContact.svg";
import arrow from "../../assets/arrow.svg";

export default function Footer() {
    return(
        <footer>
            <div className="footer">
                <div className="image-logo">
                    <img src={logo}/>
                </div>
                <div className="footer-text">
                    <div className="footer-span">
                        <h1>HELLO@COTTONFILMS.COM</h1>
                        <span><b>Arthur Medeiros</b></span>
                    
                    </div>
                    <div className="footer-textbar">
                        <span><b>CTTN©</b></span>
                        <div className="footer-link">
                        
                          <ul>
                             <li><img src={arrowContact}/>CONTACT</li>
                             <li><img src={arrow}/><a>INSTRAGRAM</a></li>
                             <li><img src={arrow}/><a>SAVVE</a></li>
                             <li><img src={arrow}/><a>DRIBBBLE</a></li>
                          </ul>

                        </div>
                      
                    </div>
                </div>
             
             

            </div>
        </footer>
    )
}
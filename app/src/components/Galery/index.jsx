import "./galery.css"

import logo from "../../assets/galeryLogo.png";
import img1 from "../../assets/galeryImage1.png";
import img2 from "../../assets/galeryImage2.png";
import img3 from "../../assets/galeryImage3.png";

import buttonleft from "../../assets/Galerybutleft.svg";
import buttonright from "../../assets/Galerybutright.svg";

export default function Galery() {
    return (
        <section className="galery">
            <div className="grid">
                <div className="top">
                    <div className="image-logo">
                        <img src={logo} />
                    </div>
                    
                    <div className="buttons">
                        <img src={buttonleft} />
                        <img src={buttonright} />
                    </div>
                </div>
                <div className="carrousel">
                    <div className="image-carrousel">
                        <img src={img1} />
                    </div>
                    <div className="image-carrousel">
                        <img src={img2} />
                    </div>
                    <div className="image-carrousel">
                        <img src={img3} />
                    </div>
                    
                </div>

            </div>
        </section>
    )
    
}
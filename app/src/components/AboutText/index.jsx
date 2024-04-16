import './about.css';
import img from "../../assets/FrameAbout.png"
export default function AboutText() {
    return(
        <section className='container-about'>
            <div className='grid'>
                <div className="group">
                    <div className="text" data-aos = "fade-right">
                        <p>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Sed a <span>luctus metus.
                            Morbi fermentum nulla vel nunc vulputate fringilla.
                            Etiam suscipit porttitor neque, in fringilla libero. 
                            Lorem ipsum dolor sit amet, consectetur</span>
                        </p>
                    </div>

                    <div className="image" data-aos = "fade-left">
                        <img src={img} alt="About Image" />
                    </div>
                
                </div>
            </div>
        </section>
    )
}
import './about.css';
import logo from "../../assets/aboutImage.png"
import arrow from "../../assets/arrow.svg"
export default function About() {
    return(
        <section className="about">
               
                    <div className="about-image">
                            <div className="textbar-span">
                                <span>2024®</span>
                            </div>
                            
                            <div className="textbar-about">
                                <span>BRASIL</span>
                                <span>NAME OF PROJET    <br/>(2023 ‘.02)</span>
                                <span>COTTON FILMS PRODUCTION</span>   
                                <span>DIRECT BY NAME</span>
                            </div>
                        </div>
                    
                    <div className="about-text">
                        <div className="about-img">
                            <img src={logo} />
                        </div>
                        <div className="text">
                            <p>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Sed a luctus metus. 
                            Morbi fermentum nulla vel nunc vulputate fringilla. 
                            Etiam suscipit porttitor neque, in fringilla libero. 
                            In fringilla orci ante, at condimentum sapien pretium ut.
                            Fusce dictum mauris nec nunc pellentesque, a aliquet diam fermentum. 
                            Ut vel lacus ac eros facilisis pretium ac non arcu. 
                            Vivamus eleifend tellus quis lacus volutpat aliquet. Aliquam porta mauris a ante consequat convallis. Sed vitae turpis dignissim, tincidunt odio quis, tincidunt libero. 
                            </p>
                            <p>
                            Cras porttitor ipsum non ligula porttitor dictum. Nam tristique enim turpis. Morbi enim velit, vehicula non pulvinar in, lacinia eu libero. Quisque eros est, cursus ut ex ac, blandit viverra diam. Donec posuere tincidunt orci, ac viverra mauris iaculis sed.
                            </p>
                            <div className='text-links'>
                                <div className='link'>
                                    <img src={arrow} />
                                    <span>INSTAGRAM</span>
                                </div>
                                <div className='link'>
                                    <img src={arrow} />
                                    <span>SAVEE</span>
                                </div>
                                <div className='link'>
                                    <img src={arrow} />
                                    <span>DRIBBLE</span>
                                </div>
                            </div>
                        </div>
                      
                    </div>
               
         

        


        </section>
    )
}
import './banner.css';
import url from '../../assets/pexels-cottonbro.png';

import video1 from '../../assets/video3.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video1.mp4';
import video4 from '../../assets/video4.mp4';
import logo from '../../assets/logo.png';
import Menu from './Menu';
import { useState } from 'react';
export default function name(props) {

    const [banner, setBanner] = useState(video1);
    const [selectedBanner, setSelectedBanner] = useState(video1);


    function handlebanner(banner){
        setBanner(banner);
        setSelectedBanner(banner);
       
    }; 

    return (
        <section className='container'>
                <div className="video-container">
                    <video className="video-element" src={banner}  autoPlay loop />
                    
                </div>

                <nav className='navbar'>
                  
                    <div className='title' data-aos="fade-up" >
                        <a>CTTN<span>©</span></a>
                    </div>
                    <Menu></Menu>
                </nav>
                <div className='image-logo'>
                <img data-aos="fade-up" data-aos-duration="1000" className='logo' src={logo} />
                </div>
                
                
                <div className='table-selection'>
                    <div className={`seletor ${selectedBanner === video1 ? 'selected' : ''}`} onClick={ () => {handlebanner(video1)}}  >
                        <span>CTTN</span>
                        <span>©</span>
                        <span>[2022]</span>
                    </div>
                    <div className={`seletor ${selectedBanner === video2 ? 'selected' : ''}`}  onClick={ () => {handlebanner(video2)}}>
                        <span>CTTN</span>
                        <span>©</span>
                        <span>[2022]</span>
                    </div>
                    <div className={`seletor ${selectedBanner === video3 ? 'selected' : ''}`} onClick={ () => {handlebanner(video3)}}>
                        <span>CTTN</span>
                        <span>©</span>
                        <span>[2023]</span>
                    </div>
                    <div className={`seletor ${selectedBanner === video4 ? 'selected' : ''}`} onClick={ () => {handlebanner(video4)}}>
                        <span>CTTN</span>
                        <span>©</span>
                        <span>[2024]</span>
                    </div>         
                </div>
        </section>
    )
}
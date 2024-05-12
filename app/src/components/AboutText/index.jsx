import './about.css';
import Lenis from 'lenis'
import img from "../../assets/FrameAbout.png";
import React, { useEffect } from 'react';
import SplitType from "split-type";
import gsap from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';
export default function AboutText() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const splitTypes = document.querySelectorAll('.reveal-type')
       
        splitTypes.forEach((char,i) => {
        
            const bg = char.dataset.bgColor
            const fg = char.dataset.fgColor
         
            const text = new SplitType(char, { types: 'chars'})

            gsap.fromTo(text.chars, 
                {
                    color: bg,
                },
                {
                    color: fg,
                    duration: 1,
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 60%',
                        end: 'top 20%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
            })
        })

        const lenis = new Lenis()
        function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    });
   
    return(
        <section className='container-about'>
            <div className='grid'>
                <div className="group">
                    <div className="text" data-aos = "fade-right">
                        <p className="reveal-type" data-bg-color="#4d4d4d" data-fg-color="#ffffff" > 
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Sed a luctus metus.
                            Morbi fermentum nulla vel nunc vulputate fringilla.
                            Etiam suscipit porttitor neque, in fringilla libero. 
                            Lorem ipsum dolor sit amet, consectetur
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
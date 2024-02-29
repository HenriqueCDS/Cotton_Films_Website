import './banner.css';
import url from  '../../assets/pexels-cottonbro.png';
import logo from '../../assets/logo.png';
import Menu from './Menu';
export default function name(props) {
    
    return(
        <header className='container'>
            <section className='container-text'>
                <nav className='navbar'>
                    <a>CTT$©</a>
                    
                    
                  <Menu>Menu</Menu>
                </nav>
                <img  data-aos="fade-up" className='logo'  src= {logo}></img>
            </section>
           
 
        </header>
        
        
        
     
    )
}
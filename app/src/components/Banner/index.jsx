import './banner.css';
import url from  '../../assets/pexels-cottonbro.png';
import logo from '../../assets/logo.png';
import Menu from './Menu';
export default function name(props) {
    
    return(
        <header className='container'>
            <section className='container-text'>
                <nav className='navbar'>
                  <div className='title'>
                    <a>CTTN<span>©</span></a> 
                  </div>
                  <Menu></Menu>
                </nav>
                <img  data-aos="fade-up" className='logo'  src= {logo}></img>
                <div className='table-selection'>
                    <div className='seletor' >
                        <span>CTTN</span> 
                        <span>©</span>
                        <span>[2023]</span> 
                    </div>
                    <div  className='seletor'>
                        <span>CTTN</span> 
                        <span>©</span>
                        <span>[2023]</span> 
                    </div>
                    <div  className='seletor'>
                        <span>CTTN</span> 
                        <span>©</span>
                        <span>[2023]</span> 
                    </div>
                    <div  className='seletor'>
                        <span>CTTN</span> 
                        <span>©</span>
                        <span>[2023]</span> 
                    </div>
                </div>
            </section>
           
 
        </header>
        
        
        
     
    )
}
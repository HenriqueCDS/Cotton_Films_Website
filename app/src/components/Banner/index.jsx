import './banner.css';
import url from '../../assets/pexels-cottonbro.png';
import logo from '../../assets/logo.png';
import Menu from './Menu';
export default function name(props) {

    return (
        <section className='container'>
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
                    <div className='seletor'  >
                        <span>CTTN</span>
                        <span>©</span>
                        <span>[2023]</span>
                    </div>
                    <div className='seletor' >
                        <span>CTTN</span>
                        <span>©</span>
                        <span>[2023]</span>
                    </div>
                    <div className='seletor'>
                        <span>CTTN</span>
                        <span>©</span>
                        <span>[2023]</span>
                    </div>
                    <div className='seletor' >
                        <span>CTTN</span>
                        <span>©</span>
                        <span>[2023]</span>
                    </div>         
                </div>
        </section>
    )
}
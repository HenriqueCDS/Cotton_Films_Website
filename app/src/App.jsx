import Banner from './components/Banner/index';
import AboutText from './components/AboutText/index';
import Galery from './components/Galery/index';
import ImageBanner from './components/ImageBanner';
import Services from './components/Services';
import About from './components/About';
import TeamOur from './components/TeamOur';
import Footer from './components/Footer';


import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <Banner />
      <AboutText />
      <Galery />
      <ImageBanner /> 
      <Services />
      <About />
      <TeamOur />
      <Footer />
      
    </>
  )
}

export default App


import Aos from 'aos';
import { useEffect } from 'react';
import './App.css';

import Extension from './components/Extension/Extension';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Heading from './components/Heading/Heading';
import Modern from './components/Modern/Modern';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Wash from './components/wash/Wash';



function App() {

useEffect(()=>{
    Aos.init();
},[])


  return (
    <div className="App">
     
      <Header />

      <Heading />
      <Modern />
      <Extension />
      <Wash />
      <Services />
      <Testimonials />
      <Footer />
    

    </div>
  );
}

export default App;

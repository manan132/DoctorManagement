import React from 'react';
import About from '../component/About';
import Appointment from '../component/Appointment';
import DCarousel from '../component/DCarousel';
import Doctor from '../component/Doctor';
import Navbar from '../component/Navbar.jsx';
import News from '../component/News';
import GoogleMap from '../component/GoogleMap';
import Footer from '../component/Footer';

function App() {

  return (
    <>
    <Navbar/>
    <DCarousel/>
    <About/>
    <Doctor/>
    <News/>
    <Appointment/>
    <GoogleMap/>
    <Footer/>
    </>
  );
}

export default App;

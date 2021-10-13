import React, {useState} from 'react';
import Hero from '../components/Hero';
import { homeObj } from '../components/Hero/Data';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Map from '../components/Map';
import Navbar from '../components/Navbar';
import Circular from '../components/Circular';
import Sidebar from '../components/Sidebar';
import Divider from '../components/Divider'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen (!isOpen)
  }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle} /> 
          <Hero {...homeObj}/>
          <Divider/>
          <Circular/>
          <FAQ/>
          <Map/>
          <Contact/>
          <Footer/>
        </>
    )
}

export default Home

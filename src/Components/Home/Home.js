import React from 'react'
import About from '../About/About';
import Banner from '../Banner/Banner'
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import ShortCard from '../ShortCard/ShortCard';

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <ShortCard></ShortCard>
        <About></About>
        <Services></Services>
        <Contact></Contact>
    </div>
  )
}

export default Home;
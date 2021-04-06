import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import HeroCarousel from "react-hero-carousel";
import ButtonGroup from "../components/elements/ButtonGroup";
import Button from "../components/elements/Button";
import Card from '../cards'
import 'reset-css'
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
const Home = () => {

  return (
    <>
  
    
     <HeroCarousel>
    
    
     <img
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
      src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1614593987/2_ning63.png"
      width="100%"
      height="100%"
    />
    
    <img
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
      src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1615099230/hero1_lva0ux.png"
      width="100%"
      height="100%"
    />


  </HeroCarousel>

  

  <div id = "overlay">  
  <Hero className="illustration-section-01" />
  </div>
      
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
      
    </>
  );
}

export default Home;
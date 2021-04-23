import React, {useEffect, useState} from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import FooterReal from '../components/layout/FooterReal.js'
import HeroCarousel from "react-hero-carousel";
import ButtonGroup from "../components/elements/ButtonGroup";
import Button from "../components/elements/Button";
import Card from '../cards'
import 'reset-css'
import "./home.css"
const Home = () => {
const [offsetY, setOffsetY]= useState(0);
const handleScroll = ()=> setOffsetY(window.pageYOffset);

useEffect(() => {
  window.addEventListener('scroll', handleScroll);

  return() => window.removeEventListener("scroll", handleScroll); 
},[]);

  return (
    <>
    <div className="header" style={{transform:`translateY(${offsetY * 0.0}px)`, overflow:"hidden!important"}}/>
 
  <div id = "overlay" style={{transform:`translateY(${offsetY * -0.3}px)`, overflow:"hidden!important"}}>  
    <Hero className="illustration-section-01" />
  </div>  
  <div id="services" style={{transform:`translateY(${offsetY * -0.3}px)`, overflow:"hidden!important"}}>
    <FeaturesTiles style={{marginTop:"100px",backgroundColor:"white"}}/>
  </div>
  {/* <div style={{transform:`translateY(${offsetY * -0.3}px)`, overflow:"hidden!important"}}>
    <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
  </div>
  <div style={{transform:`translateY(${offsetY * -0.3}px)`, overflow:"hidden!important"}}>
    <Testimonial topDivider />
  </div>
  <div style={{transform:`translateY(${offsetY * -0.3}px)`, overflow:"hidden!important"}}>
    <Cta split />
  </div>
  <div style={{transform:`translateY(${offsetY * -0.3}px)`, overflow:"hidden!important"}}>
    <FooterReal/>
  </div> */}
 
 <div id="study-abroad" style={{transform:`translateY(${offsetY * -0.3}px)`, overflow:"hidden!important"}}>
    <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
  </div>
  <Testimonial topDivider />
  <Cta split />
  <FooterReal/>
    </>
  );
}

export default Home;
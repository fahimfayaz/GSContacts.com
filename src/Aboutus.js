import React, {useEffect, useState} from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import store from "./store";
import "./uniPage.css";
import Hero from "./components/sections/HeroUni.js"
import Copyright from "./components/Copyright";
import FeaturesTiles from "./components/sections/FeaturesTilesAboutus";
import FeaturesSplit from "./components/sections/FeaturesSplitAboutus";
import HeroCarousel from "react-hero-carousel";
function Aboutus () {
  const [offsetY, setOffsetY]= useState(0);
  const handleScroll = ()=> setOffsetY(window.pageYOffset);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  
    return() => window.removeEventListener("scroll", handleScroll); 
    },[]);

    return (
      <>
      <div className="HeroCarousel" style={{transform:`translateY(${offsetY * -0.6}px)`}}>
   <HeroCarousel>
     <img
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
      src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618555755/img3_f7yyzn.jpg"
      width="100%"
      height="100%"
    />
    
  </HeroCarousel>
  </div>
  <div id = "overlay" style={{transform:`translateY(${offsetY * -0.6}px)`}}>  
  <Hero className="illustration-section-01" />
  </div>
      <Provider store={store}>
        <div id="header" className=" padding-top container" style={{transform:`translateY(${offsetY * 0.0}px)`}}>
         
       
          
         
            <FeaturesTiles />
            <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
         
          
              {/* <Basket />
              <Copyright /> */}
            
        </div>
      </Provider>
      </>
    );
  }
      
export default Aboutus;

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
import ProductsUK from "./components/ProductsUK";
import HeroCarousel from "react-hero-carousel";
import SectionHeader from './components/sections/partials/SectionHeader';
import Button from '@material-ui/core/Button';
import {Link} from 'react-scroll';
import SimpleAccordion from './UniAccordions/AccordionUK'
function UniUK() {
  
    const sectionHeader = {
      title: 'Study in UK',
      paragraph: ' '
    };
    const [offsetY, setOffsetY]= useState(0);
    const handleScroll = ()=> setOffsetY(window.pageYOffset);
    
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
    
      return() => window.removeEventListener("scroll", handleScroll); 
    },[]);

    return (
      <>
       <div className="HeroCarousel" style={{transform:`translateY(${offsetY * -0.6}px)`, overflow:"hidden!important"}}>
   <HeroCarousel >
     <img
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
      src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618473475/big-ben-westminster-bridge-sunset-london-uk_sffqxa.jpg"
      width="100%"
      height="100%"
    />
    
  </HeroCarousel>
  </div>
      <Provider store={store}>
        <div className="container">
         
       
        <div style={{textShadow:"1px 1px rgba(0,0,0,0.3)"}} id = "overlay" className='sec_hdr_container'>  
  <SectionHeader data={sectionHeader} className="padding-top-section-header center-content" />
    <div id = "overlay" className='sec_btn_container' style={{display:"flex",flexDirection:"column",verticalAlign:"center"}}>
      <div style={{padding:"0 30px 0 30px",width:"100%"}}>
        <a style={{color:"white"}}>
          </a>
      </div>
        <Button
              className="btn-seemore"
                wideMobile
                href="#UKproducts"
                style={{fontSize:"20px"}}
              >
              <Link
                activeClass="active"
                to="section-UK-cards"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >See More 	&#8595;</Link>
          
          </Button>
      </div>  
  </div>
         
           <ProductsUK/>

         <SimpleAccordion/>
          
              {/* <Basket />
              <Copyright /> */}
            
        </div>
      </Provider>
      </>
    );
}

export default UniUK;
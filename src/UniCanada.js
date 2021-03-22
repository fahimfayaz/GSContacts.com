import React, { Component } from "react";
import { Provider } from "react-redux";

import Filter from "./components/Filter";
import Basket from "./components/Basket";
import store from "./store";
import "./uniPage.css";
import Hero from "./components/sections/HeroUni.js"
import Copyright from "./components/Copyright";
import FeaturesTiles from "./components/sections/FeaturesTilesAboutus";
import FeaturesSplit from "./components/sections/FeaturesSplitAboutus";
import Products from "./components/ProductsCanada";
import HeroCarousel from "react-hero-carousel";
import SectionHeader from './components/sections/partials/SectionHeader';
class UniCanada extends Component {
  render() {
    const sectionHeader = {
      title: 'Contacts International',
      paragraph: 'For over 30 years, we have been the ‘home’ of overseas university applications, assisting self-funded students through the entire university application process. '
    };
  
    return (
      <>
       <div className="HeroCarousel">
   <HeroCarousel >
     <img
      style={{
        width: "100%",
        height: "50%",
        objectFit: "cover",
      }}
      src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1616409800/canada_banner_ix3cmc.jpg"
      width="100%"
      height="500px"
    />
    
  </HeroCarousel>
      <div className=""></div>

  </div>
      <Provider store={store}>
        <div className="padding-top container">
         
       
        <SectionHeader data={sectionHeader} className="padding-top-section-header center-content" />
         
           <Products/>
         
          
              {/* <Basket />
              <Copyright /> */}
            
        </div>
      </Provider>
      </>
    );
  }
}

export default UniCanada;

import React, { Component } from "react";
import { Provider } from "react-redux";
import SectionHeader from './components/sections/partials/SectionHeader';
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import store from "./store";
import "./uniPage.css";
import Hero from "./components/sections/HeroUni.js"
import Copyright from "./components/Copyright";
import FeaturesTiles from "./components/sections/FeaturesTilesAboutus";
import FeaturesSplit from "./components/sections/FeaturesSplitAboutus";
import Products from "./components/ProductsAustralia";
import HeroCarousel from "react-hero-carousel";
class UniAustralia extends Component {
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
        height: "500px",
        objectFit: "cover",
      }}
      src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1616419970/australia_qmhctr.jpg"
      width="100%"
      height="500px"
    />
    
  </HeroCarousel>
  </div>

      <Provider store={store}>
        <div className="container">
         
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

export default UniAustralia;
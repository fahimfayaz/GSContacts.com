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
      title: 'Study in Australia',
      paragraph: ' '
    };
  
    return (
      <>
       <div className="HeroCarousel">
   <HeroCarousel >
     <img
      style={{
        width: "100%",
        height: "70%",
        objectFit: "cover",
      }}
      src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1614593987/2_ning63.png"
      width="100%"
      height="500px"
    />
    
  </HeroCarousel>
  </div>
  <div id = "overlay">  
  <SectionHeader data={sectionHeader} className="padding-top-section-header center-content" />
      
  </div>
      
      <Provider store={store}>
        <div className="container">
         
          
         
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

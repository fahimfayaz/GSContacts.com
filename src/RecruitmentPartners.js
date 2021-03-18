import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import store from "./store";
import "./uniPage.css";
import Testimonial from './components/sections/Testimonial';
import Hero from "./components/sections/HeroUni.js"
import Copyright from "./components/Copyright";
import FeaturesTiles from "./components/sections/FeaturesTilesRecruitmentPartners";
import FeaturesSplit from "./components/sections/FeaturesSplitRecruitmentPartners";
import HeroCarousel from "react-hero-carousel";
class Aboutus extends Component {
  render() {
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
      src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1614593987/2_ning63.png"
      width="100%"
      height="500px"
    />
    
  </HeroCarousel>
  </div>
      <Provider store={store}>
        <div className="container">
         
       
          
         
            <FeaturesTiles />
            <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
         
            <Testimonial topDivider />
              {/* <Basket />
              <Copyright /> */}
            
        </div>
      </Provider>
      </>
    );
  }
}

export default Aboutus;

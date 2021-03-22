import React, { Component } from "react";
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
class StudentServices extends Component {
  render() {
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
      src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/c_scale,w_1924/v1616421061/student-services_bmpxs5.jpg"
      width="100%"
      height="500px"
    />
    
  </HeroCarousel>
  </div>
      <Provider store={store}>
        <div className="container">
         
       
          
         
     
            <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
         
            <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
              {/* <Basket />
              <Copyright /> */}
            
        </div>
      </Provider>
      </>
    );
  }
}

export default StudentServices;

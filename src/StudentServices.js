import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import store from "./store";
import "./uniPage.css";
import Hero from "./components/sections/HeroUni.js"
import Copyright from "./components/Copyright";
import FeaturesTiles from "./components/sections/FeaturesTilesStudentsServices";
import FeaturesTilesHowItWorks from "./components/sections/FeaturesTilesStudentsServicesHowItWorks";
import FeaturesSplit from "./components/sections/FeaturesSplitAboutus";
import HeroCarousel from "react-hero-carousel";
import Cta from './components/sections/Cta';
import FeaturedStudyDestination from './components/sections/FeaturedStudyDestination'
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
         
       
            
        <FeaturesTiles />
     <Cta split />
<FeaturedStudyDestination/>
            <FeaturesTilesHowItWorks/>
              {/* <Basket />
              <Copyright /> */}
            
        </div>
      </Provider>
      </>
    );
  }
}

export default StudentServices;

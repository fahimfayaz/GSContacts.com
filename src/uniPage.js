import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import store from "./store";
import "./uniPage.css";
import Hero from "./components/sections/HeroUni.js"
import Copyright from "./components/Copyright";
import HeroCarousel from "react-hero-carousel";
class Uni extends Component {
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
         
       
          <div className="justify-content-center row">
            <div className="col-md-3">
              <Filter />
            </div> 
            
            <div className="col-md-9">
            <div className="justify-content-center section"> 
            <div className="padding"></div>
            <div className="justify-content-center"><Products /></div>
              
            </div>
            </div>
            
            <div >
              {/* <Basket />
              <Copyright /> */}
            </div>
          </div>
        </div>
      </Provider>
      </>
    );
  }
}

export default Uni;

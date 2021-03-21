import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import store from "./store";
import "./uniPage.css";
import Hero from "./components/sections/HeroUni.js";
import Copyright from "./components/Copyright";
import HeroCarousel from "react-hero-carousel";
class UniCountry extends Component {
  render() {
    return (
      <>
        
        <Provider store={store}>
          <div className="padding-top container">
            <div className="justify-content-center row">
              <div className="col-md-3">
                <Filter country={this.props.country} />
              </div>

              <div className="col-md-9">
                <div className="justify-content-center section">
                  <div className="padding"></div>
                  <div className="justify-content-center">
                    <Products />
                  </div>
                </div>
              </div>

              <div>{/* <Basket />
              <Copyright /> */}</div>
            </div>
          </div>
        </Provider>
      </>
    );
  }
}

export default Uni;

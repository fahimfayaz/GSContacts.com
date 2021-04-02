import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/ProductsSingle";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import store from "./store";
import "./uniPage.css";
import Hero from "./components/sections/HeroUni.js";
import Copyright from "./components/Copyright";
import HeroCarousel from "react-hero-carousel";
import Card from "./cards"

import { useQuery, gql } from "@apollo/client";

const GET_USER = gql`
query MyQuery ($id: numeric){
  products(where: {id: {_eq: $id}}) {
    AcommodationCost
    Picture
    description
    availableSizes
    semesterStart1
    semesterStart2
    price
    pgFee
    diplomaFee
    id
  }
}
`;  

function SingleUniPage(props) {

    return (
      <>
        
        <Provider store={store}>
          <div className="padding-top container">
            <div className="justify-content-center row">
              <div className="col-md-3">
              <Products uni={props.match.params.id}/>
              </div>

              <div className="col-md-9">
                <div className="justify-content-center section">
                  <div className="padding"></div>
                  <div className="justify-content-center">
                   
                  </div>
                </div>
              </div>

          
            </div>
          </div>
        </Provider>
      </>
    );

}

export default SingleUniPage;

import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import util from "../util";
import { addToCart } from "../actions/cartActions";
import { fetchProductsSingle } from "../actions/productActions";
import Card from "../cards";

import { useQuery, gql } from "@apollo/client";
import db from "../config";

import Uni from "./uniFirebase";
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
function Products(props) {
  //   constructor(){
  //   const [blogs,setBlogs]=useState([])
  //   useEffect(() => {
  //     fetchBlogs();
  //   }, [])

  //   const fetchBlogs=async()=>{
  //     const response=db.collection('products');
  //     const data=await response.get();
  //     data.docs.forEach(item=>{
  //       setBlogs([...blogs,item.data()])
  //      })
  // }
  //   }
 
  


    const { loading, error, data } = useQuery(GET_USER, {
      variables: { id: props}
    });
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;


    const productItems = data.products.map((product) => (
      //  const productItems = blogs.map((product) => (
      <div className="split-item-content fw-600 tt-u mb-8">
        <div
          className=" split-item-content card-padding fw-600 tt-u mb-8"
          key={product.id}
        >
          {product.id == props.uni && (
            <>
              <Card
                image={product.Picture}
                title={product.title}
                text={product.title}
                ugFee={product.ugFee}
                pgFee={product.pgFee}
                diplomaFee={product.diplomaFee}
                semesterStart1={product.semesterStart1}
                semesterStart2={product.semesterStart2}
                AcommodationCost={product.AcommodationCost}
                ranking={product.price}
              />
            </>
          )}
        </div>
      </div>
    ));

    return <div className="row">{productItems}</div>;

}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProductsSingle, addToCart })(
  Products
);

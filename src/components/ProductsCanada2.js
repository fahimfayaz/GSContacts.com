import React, { Component, useState,useEffect} from "react";
import { connect } from "react-redux";
import classNames from 'classnames';
import util from "../util";
import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";
import Card from "../cards"

import db from '../config'

import Uni from './uniFirebase'

class Products extends Component {
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
  componentDidMount() { 

    var country = "all"
    this.props.fetchProducts(country);
  }
 
  render() {
  
     const productItems = this.props.products.map((product) => (
    //  const productItems = blogs.map((product) => (
      <div className="split-item-content fw-600 tt-u mb-8" >

      
          <div className="text-xxs text-color-primary fw-600 tt-u mb-8">

          </div>
      <div  className=" split-item-content card-padding fw-600 tt-u mb-8" key={product.id}>
       
       <Card image={product.Picture} title={product.title} text={product.title} ugFee={product.ugFee} pgFee={product.pgFee} diplomaFee={product.diplomaFee} semesterStart1={product.semesterStart1} semesterStart2={product.semesterStart2} AcommodationCost={product.AcommodationCost} ranking={product.price}/>
        {/* <div className="thumbnail text-center">
          <a
            href={`#${product.id}`}
            onClick={(e) => this.props.addToCart(this.props.cartItems, product)}nm
          >
            <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
            <p>{product.title}</p>
          </a>
          <b>{util.formatCurrency(product.price)}</b>
          <button
            className="btn btn-primary"
            onClick={(e) => this.props.handleAddToCart(e, product)}
          >
            Add to cart
          </button>
          </div>*/}
          </div> 
      </div>
       
    ));

    return <div className="row">{productItems}</div>;
  }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);

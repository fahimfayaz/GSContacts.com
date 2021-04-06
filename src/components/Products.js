import React, { Component, useState,useEffect} from "react";
import { connect } from "react-redux";
import classNames from 'classnames';
import util from "../util";
import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";
import Card from "../cards"
import * as FirestoreService from '../config';
import db from '../config'

import Uni from './uniFirebase'

// class Products extends Component {
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
  // componentDidMount() { 

  //   var country = "all"
  //   this.props.fetchProducts(country);
  // }
 
  function Products (props) {

    
    const { groceryListId } = props;

    const [ uniCards  , setUniCards ] = useState([]);
    const [ error, setError ] = useState();
    useEffect(() => {
      const unsubscribe = FirestoreService.streamGroceryListItems(groceryListId, {
          next: querySnapshot => {
              const updatedGroceryItems = 
                  querySnapshot.docs.map(docSnapshot => docSnapshot.data());
              setUniCards(updatedGroceryItems);
          },
          error: () => setError('grocery-list-item-get-fail')
      });
      return unsubscribe;
  }, [groceryListId, setUniCards]);
console.log(uniCards)

const productItems = uniCards
.map((uni, i) => <div className="split-item-content card-padding fw-600 tt-u mb-8" key={i}> <Card image ={uni.Picture}/></div>);


 

    return <div className="row">{productItems}</div>;
  }
// }
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);

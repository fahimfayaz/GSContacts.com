import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from 'classnames';
import util from "../util";
import { addToCart } from "../actions/cartActions";
import { fetchCanada } from "../actions/productActions";
import Card from "../cards"
import useFirestore from '../hooks/useFirestore';
import Uni from '../uniFirebase'
class Products extends Component {
  componentDidMount() {
    this.props.fetchCanada();
  }
  render() {
    const productItems = this.props.products.map((product) => (

      <div className="split-item-content fw-600 tt-u mb-8" >

      
          <div className="text-xxs text-color-primary fw-600 tt-u mb-8">

          </div>
      <div className="cont split-item-content card-padding fw-600 tt-u mb-8" key={product.id}>
       
       <Card  image={`products/${product.sku}_2.jpg`} title={product.title} text={product.title} ugFee={product.ugFee} pgFee={product.pgFee} diplomaFee={product.diplomaFee} semesterStart1={product.semesterStart1} semesterStart2={product.semesterStart2} AcommodationCost={product.AcommodationCost} ranking={product.price}/>
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
export default connect(mapStateToProps, { fetchCanada, addToCart })(Products);

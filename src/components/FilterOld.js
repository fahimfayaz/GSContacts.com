import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/productActions";
import "./components.css";
class Filter extends Component {
  render() {
    return (
      <div className="section row">
        {/* <div className="col-md-4">{`${this.props.filteredProducts.length} products found.`}</div> */}
        <div className="filter col-md-12">
          <div className="card-padding">
            <label>
              <div className="select-country">Order by ranking</div>
              <select
                className="form-control"
                value={this.props.sort}
                onChange={(event) => {
                  this.props.sortProducts(
                    this.props.filteredProducts,
                    event.target.value
                  );
                }}
              >  
                <option value="">Select</option>
                <option value="lowestprice">Lowest to highest</option>
                <option value="highestprice">Highest to lowest</option>
              </select>
            </label>
          </div>
          <div className="card-padding">
            <label>
              {" "}
              <div className="select-country">Filter Countries</div>
              <select
                className="form-control"
                value={this.props.size}
                onChange={(event) => {
                  this.props.filterProducts(
                    this.props.products,
                    event.target.value
                  );
                }}
              >
                <option value="">ALL</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                <option value="U.K.">U.K.</option>
                <option value="Cyprus">Cyprus</option>
                {/* <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option> */}
              </select>
            </label>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  size: state.products.size,
  sort: state.products.sort,
});
export default connect(mapStateToProps, { filterProducts, sortProducts })(
  Filter
);

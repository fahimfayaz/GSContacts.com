import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
} from "./types";

// export const fetchProducts = () => (dispatch) => {
//   fetch("http://localhost:8000/products")
//     .then((res) => res.json())
//     .catch((err) =>
//       fetch("db.json")
//         .then((res) => res.json())
//         .then((data) => data.products)
//     )
//     .then((data) => {
//       dispatch({ type: FETCH_PRODUCTS, payload: data });
//     });
// };

export const fetchProductsSingle = () => (dispatch) => {
 
  fetch("http://localhost:8000/products")
  .then((res) => res.json())
  .catch((err) =>
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => data.products)
  )
  .then((data) => {
    dispatch({ type: FETCH_PRODUCTS, payload: data });
  });
  }

export const fetchProducts = (country) => (dispatch) => {
  if(country=="canada"){
    fetch("http://localhost:8000/products")
    .then((res) => res.json())
    .catch((err) =>
      fetch("dbCanada.json")
        .then((res) => res.json())
        .then((data) => data.products)
    )
    .then((data) => {
      dispatch({ type: FETCH_PRODUCTS, payload: data });
    });
  }
  else if (country=="uk"){
    fetch("http://localhost:8000/products")
    .then((res) => res.json())
    .catch((err) =>
      fetch("dbUK.json")
        .then((res) => res.json())
        .then((data) => data.products)
    )
    .then((data) => {
      dispatch({ type: FETCH_PRODUCTS, payload: data });
    });

  }
else if (country =="australia"){
  fetch("http://localhost:8000/products")
    .then((res) => res.json())
    .catch((err) =>
      fetch("dbAustralia.json")
        .then((res) => res.json())
        .then((data) => data.products)
    )
    .then((data) => {
      dispatch({ type: FETCH_PRODUCTS, payload: data });
    });

}
else if(country== "cyprus"){
  fetch("http://localhost:8000/products")
  .then((res) => res.json())
  .catch((err) =>
    fetch("dbCyprus.json")
      .then((res) => res.json())
      .then((data) => data.products)
  )
  .then((data) => {
    dispatch({ type: FETCH_PRODUCTS, payload: data });
  });
  
}
else{
  fetch("http://localhost:8000/products")
  .then((res) => res.json())
  .catch((err) =>
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => data.products)
  )
  .then((data) => {
    dispatch({ type: FETCH_PRODUCTS, payload: data });
  });
  
}

};

export const filterProducts = (products, size) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ""
          ? products
          : products.filter(
              (x) => x.availableSizes.indexOf(size.toUpperCase()) >= 0
            ),
    },
  });
};

export const sortProducts = (items, sort) => (dispatch) => {
  const products = items.slice();
  if (sort !== "") {
    products.sort((a, b) =>
      sort === "lowestprice"
        ? a.price > b.price
          ? 1
          : -1
        : a.price < b.price
        ? 1
        : -1
    );
  } else {
    products.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: products,
    },
  });
};

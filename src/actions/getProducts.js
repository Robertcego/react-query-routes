import { GET_PRODUCTS } from '.';
const axios = require('axios');

const getProducts = () => {
  return async (dispatch) => {
    try {
      const productsData = await axios.get('https://fakestoreapi.com/products');
      dispatch({
        type: GET_PRODUCTS,
        payload: productsData.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export default getProducts;

import { GET_PRODUCT_DETAILS } from '.';

const axios = require('axios');

const getProductDetails = (id) => {
  return async (dispatch) => {
    try {
      const productDetail = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      dispatch({
        type: GET_PRODUCT_DETAILS,
        payload: productDetail.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export default getProductDetails;

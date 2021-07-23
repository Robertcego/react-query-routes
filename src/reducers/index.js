import {
  GET_PRODUCTS,
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_BY_NAME,
} from '../actions';

const initialState = {
  products: [],
  productDetails: [],
  productByName: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case GET_PRODUCT_DETAILS: {
      return {
        ...state,
        productDetails: action.payload,
      };
    }
    case GET_PRODUCT_BY_NAME: {
      return {
        ...state,
        productByName: action.payload,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;

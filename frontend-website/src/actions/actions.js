import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/constants";

const onGetProducts = () => (dispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });

  var config = {
    method: "get",
    url: "https://api4286.s3.ap-south-1.amazonaws.com/products.json",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      dispatch({type: PRODUCT_LIST_SUCCESS, payload: response.data});
    })
    .catch(function (error) {
      dispatch({type: PRODUCT_LIST_SUCCESS, payload: error});
    });
};

export {onGetProducts}
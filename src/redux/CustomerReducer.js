import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import axios from "axios";

const initState = {
  customerList: [],
  progress: false,
  // searchResultList:[],
  searchResult: {},
  // customer:{},
  // on click of update button; the key will be updated.
  uref: {},
};

const PROGRESS_ACTION_TYPE = "PROGRESS_ACTION_TYPE";

const CUSTOMER_CREATE_ACTION_TYPE = "CUSTOMER_CREATE_ACTION_TYPE";

const CUSTOMER_GET_ALL_ACTION_TYPE = "CUSTOMER_GET_ALL_ACTION_TYPE";

const CUSTOMER_UPDATE_RENDER_ACTION_TYPE = "CUSTOMER_UPDATE_RENDER_ACTION_TYPE";

const GET_CUSTOMER_BY_ID_ACTION = "GET_CUSTOMER_BY_ID_ACTION_TYPE";

export const getCustomer = (payload) => {
  return async (dispatch) => {
    console.log(`filter : ${payload}`);
    let url;
    if (payload.filterType === "filterByMobileNumber") {
      url = `http://localhost:8080/customer/customerbymobile/${payload.filter.mobileNumber}`;
    } else if (payload.filterType === "filterByEmail") {
      url = `http://localhost:8080/customer/customerbyemail/${payload.filter.email}`;
    }
    // } else if (payload.filterType === "filterByConsumerNumber") {
    //   url = `http://localhost:8080/viewbillconsumernumber/${payload.filter.consumerNumber}`;
    // }
    //     const response = await axios.get(url);
    //     dispatch({ type: GET_CUSTOMER_BY_ID_ACTION, payload: response.data });
    //   };
    // };

    let data = null;
    try {
      const response = await axios.get(url);
      data = response.data;
    } catch (err) {
      console.log(`Error ${err}`);
    }
    dispatch({ type: GET_CUSTOMER_BY_ID_ACTION, payload: data });
  };
};

export const getAllCustomerAction = () => {
  return async (dispatch) => {
    // API CALL
    const url = `http://localhost:8080/customer/allcustomer`;
    const response = await axios.get(url);

    console.log(response);

    // UI UPDATE
    dispatch({ type: "CUSTOMER_GET_ALL_ACTION_TYPE", payload: response.data });
  };
};

export const cretaeCustomerAction = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8080/customer/customers`;
    await axios.post(url, payload);

    let data = null;
    try {
      const response = await axios.get(url);
      data = response.data;
    } catch (err) {
      console.log(`Error ${err}`);
    }

    // updating the ui.
    dispatch({ type: PROGRESS_ACTION_TYPE, payload: true });

    // after 5 second PROGRESS :: FALSE AGAIN
    setTimeout(() => {
      dispatch({ type: PROGRESS_ACTION_TYPE, payload: false });
    }, 5000);
  };
};

export const updateCustomerAction = (payload) => {
  return async (dispatch) => {
    // making the server call.
    const url = `http://localhost:8080/customer/edit/${payload.customerId}`;
    await axios.put(url, payload);

    // making the uref empty again.
    updateRenderAction({});

    // update the ui. TODO
    dispatch({ type: PROGRESS_ACTION_TYPE, payload: true });

    // after 5 second PROGRESS :: FALSE AGAIN
    setTimeout(() => {
      dispatch({ type: PROGRESS_ACTION_TYPE, payload: false });
    }, 5000);
  };
};

export const updateRenderAction = (payload) => {
  // ONLY UPDATEING THE UI
  // 5
  return { type: CUSTOMER_UPDATE_RENDER_ACTION_TYPE, payload: payload };
};

export function CustomerReducer(state = initState, action) {
  switch (action.type) {
    case CUSTOMER_GET_ALL_ACTION_TYPE:
      return { ...state, customerList: action.payload };

    case PROGRESS_ACTION_TYPE:
      return { ...state, progress: action.payload };

    case CUSTOMER_UPDATE_RENDER_ACTION_TYPE:
      // 6
      return { ...state, uref: action.payload };

    case GET_CUSTOMER_BY_ID_ACTION:
      return { ...state, searchResult: action.payload };

    default:
      return state;
  }
}

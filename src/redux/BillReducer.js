import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import axios from "axios";

const initState = {
  readingList: [],
  uref: {},
};

//Action type
const PROGRESS_ACTION_TYPE = "PROGRESS_ACTION_TYPE";
const GET_BILL_BY_Phone_ACTION = "GET_BILL_BY_Phone_ACTION_TYPE";

export const getBill = (payload) => {
  return async (dispatch) => {
    console.log(`filter : ${payload}`);
    let url;
    if (payload.filterType === "filterByPhone") {
      url = `http://localhost:8080/viewBillMobileNumber/${payload.filter.phoneNumber}`;
    } else if (payload.filterType === "filterByEmail") {
      url = `http://localhost:8080/viewBillByEmail/${payload.filter.email}`;
    } else if (payload.filterType === "filterByConsumerNumber") {
      url = `http://localhost:8080/viewbillconsumernumber/${payload.filter.consumerNumber}`;
    }
    const response = await axios.get(url);
    dispatch({ type: GET_BILL_BY_Phone_ACTION, payload: response.data });
  };
};

export function BillReducer(state = initState, action) {
  switch (action.type) {
    case GET_BILL_BY_Phone_ACTION:
      return { ...state, bill: action.payload };
    case PROGRESS_ACTION_TYPE:
      return { ...state, progress: action.payload };

    default:
      return state;
  }
}

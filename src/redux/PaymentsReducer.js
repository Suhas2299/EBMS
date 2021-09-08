import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import axios from "axios";

const initState = {
  readingList: [],
  uref: {},
  payment: {},
};

//Action type
const GET_BILL_BY_Phone_ACTION = "GET_BILL_BY_Phone_ACTION_TYPE";
const PAYMENT_SUCCESSFUL_ACTION_TYPE = "PAYMENT_SUCCESSFUL_ACTION_TYPE";
const PAYMENT_FAILURE_ACTION_TYPE = "PAYMENT_FAILURE_ACTION_TYPE";
export const PAYMENT_STATE_CLEAR_ACTION_TYPE =
  "PAYMENT_STATE_CLEAR_ACTION_TYPE";

export const doCreditPayment = (payload) => {
  return async (dispatch) => {
    console.log("Paying with credit..");
    try {
      const response = await axios.post(
        "http://localhost:8080/payment",
        payload
      );
      dispatch({
        type: PAYMENT_SUCCESSFUL_ACTION_TYPE,
        payload: { status: "successful" },
      });
    } catch (err) {
      console.log(`Error occured ${err}`);
      dispatch({
        type: PAYMENT_FAILURE_ACTION_TYPE,
        payload: { status: "failed" },
      });
    }
  };
};

export function PaymentsReducer(state = initState, action) {
  switch (action.type) {
    case GET_BILL_BY_Phone_ACTION:
      return { ...state, bill: action.payload };
    case PAYMENT_SUCCESSFUL_ACTION_TYPE:
      return { ...state, payment: action.payload };
    case PAYMENT_FAILURE_ACTION_TYPE:
      return { ...state, payment: action.payload };
    case PAYMENT_STATE_CLEAR_ACTION_TYPE:
      return { ...state, payment: null };

    default:
      return state;
  }
}

import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import axios from "axios";

const initState = {
  readingList: [],
  uref: {},
};

//Action type
const READING_CREATE_ACTION_TYPE = "READING_CREATE_ACTION_TYPE";
const PROGRESS_ACTION_TYPE = "PROGRESS_ACTION_TYPE";

export const createReadingAction = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8080/selfreading`;
    console.log("creat reading entry : " + payload);
    await axios.post(url, payload);
    dispatch({ type: PROGRESS_ACTION_TYPE, payload: true });

    // after 5 second PROGRESS :: FALSE AGAIN
    setTimeout(() => {
      dispatch({ type: PROGRESS_ACTION_TYPE, payload: false });
    }, 5000);
  };
};

export function ReadingReducer(state = initState, action) {
  switch (action.type) {
    case PROGRESS_ACTION_TYPE:
      return { ...state, progress: action.payload };

    default:
      return state;
  }
}

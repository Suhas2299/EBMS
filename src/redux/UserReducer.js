import axios from "axios";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const initState = {
  userList: [],
  progress: false,
  loginValidation: false,
  loginSuccess: false,
};

const HOME_ACTION_TYPE = "HOME_CREATE_ACTION_TYPE";

export const HomeAction = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8080/user/users`;
    await axios.post(url, payload);
  };
};

const USER_SIGNUP_ACTION_TYPE = "USER_SIGNUP_ACTION_TYPE";
const PROGRESS_ACTION_TYPE = "PROGRESS_ACTION_TYPE";
const LOGINVALIDATION_ACTION_TYPE = "LOGINVALIDATION_ACTION_TYPE";
const LOGINSUCCESS_ACTION_TYPE = "LOGINSUCCESS_ACTION_TYPE";

export const userSignUpAction = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8080/user/users`;
    const response = await axios.post(url, payload);
    console.log(response);

    dispatch({ type: PROGRESS_ACTION_TYPE, payload: true });

    setTimeout(() => {
      dispatch({ type: PROGRESS_ACTION_TYPE, payload: false });
    }, 5000);
  };
};

export const loginUser = (payload) => {
  return async (dispatch) => {
    try {
      const url = `http://localhost:8080/user/login`;
      const response = await axios.post(url, payload);
      console.log(response);

      if (response.data !== "") {
        dispatch({ type: LOGINSUCCESS_ACTION_TYPE, payload: true });
        localStorage.setItem("loginSuccess", "true");
      } else {
        dispatch({ type: LOGINVALIDATION_ACTION_TYPE, payload: true });
        setTimeout(() => {
          dispatch({ type: LOGINVALIDATION_ACTION_TYPE, payload: false });
        }, 1000);
      }
    } catch (err) {
      dispatch({ type: LOGINVALIDATION_ACTION_TYPE, payload: true });
      setTimeout(() => {
        dispatch({ type: LOGINVALIDATION_ACTION_TYPE, payload: false });
      }, 1000);
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    dispatch({ type: LOGINSUCCESS_ACTION_TYPE, payload: false });
    localStorage.removeItem("loginSuccess");
  };
};

export function UserReducer(state = initState, action) {
  switch (action.type) {
    case PROGRESS_ACTION_TYPE:
      return { ...state, progress: action.payload };
    case LOGINVALIDATION_ACTION_TYPE:
      return { ...state, loginValidation: action.payload };
    case LOGINSUCCESS_ACTION_TYPE:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
}

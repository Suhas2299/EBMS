import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import axios from "axios";

const initState = {
  connectionList: [],
  progress: false,
  addressList: [],
  searchResult: {},
};

const ADDRESS_ACTION_TYPE = "ADDRESS_ACTION_TYPE";

const PROGRESS_ACTION_TYPE = "PROGRESS_ACTION_TYPE";

const CONNECTION_CREATE_ACTION_TYPE = "CONNECTION_CREATE_ACTION_TYPE";

const CONNECTION_GET_ALL_ACTION_TYPE = "CONNECTION_GET_ALL_ACTION_TYPE";

const GET_CONNECTION_BY_ID_ACTION = "GET_CONNECTION_BY_ID_ACTION_TYPE";

// ***************************FINDBYACTIVECONNECTION********************
export const getConnection = (payload) => {
  return async (dispatch) => {
    console.log(`filter : ${payload}`);
    let url;
    if (payload.filterType === "filterByPinCode") {
      url = `http://localhost:8080/customeruser/findActiveConnetionByPincode?pincodeNumber=${payload.filter.pincode}`;
    } else if (payload.filterType === "filterByVillage") {
      url = `http://localhost:8080/customeruser/findActiveConnectionsByVillage?villageName=${payload.filter.village}`;
    } else if (payload.filterType === "filterByDistrict") {
      url = `http://localhost:8080/customeruser/findActiveConnetionByDistrict?districtName=${payload.filter.district}`;
    }

    let data = [];
    try {
      const response = await axios.get(url);
      data = response.data ? response.data : [];
      console.log(data);
    } catch (err) {
      console.log(`Error ${err}`);
    }
    dispatch({ type: GET_CONNECTION_BY_ID_ACTION, payload: data });
  };
};

// ****************************FindInACtiveCONNECTION*******************
export const getInactiveConnection = (payload) => {
  return async (dispatch) => {
    console.log(`filter : ${payload}`);
    let url;
    if (payload.filterType === "filterByPinCode") {
      url = `http://localhost:8080/customeruser/findInactiveConnetionByPincode?pincodeNumber=${payload.filter.pincode}`;
    } else if (payload.filterType === "filterByVillage") {
      url = `http://localhost:8080/customeruser/findInactiveConnectionsByVillage?villageName=${payload.filter.village}`;
    } else if (payload.filterType === "filterByDistrict") {
      url = `http://localhost:8080/customeruser/findIanctiveConnetionByDistrict?districtName=${payload.filter.district}`;
    }

    let data = null;
    try {
      const response = await axios.get(url);
      data = response.data;
      console.log(data);
    } catch (err) {
      console.log(`Error ${err}`);
    }
    dispatch({ type: GET_CONNECTION_BY_ID_ACTION, payload: data });
  };
};
// ***********************************************
export const getAllConnectionAction = () => {
  return async (dispatch) => {
    // API CALL
    const url = `http://localhost:8080/customeruser/getallConnection`;
    const response = await axios.get(url);

    console.log(response);

    // UI UPDATE
    dispatch({
      type: "CONNECTION_GET_ALL_ACTION_TYPE",
      payload: response.data,
    });
  };
};
// **********************************
export const cretaeConnectionAction = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8080//customeruser/connection`;
    await axios.post(url, payload);

    // updating the ui.
    dispatch({ type: PROGRESS_ACTION_TYPE, payload: true });

    // after 5 second PROGRESS :: FALSE AGAIN
    setTimeout(() => {
      dispatch({ type: PROGRESS_ACTION_TYPE, payload: false });
    }, 5000);
  };
};
// *********************************
export const addressAction = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8080/customeruser/address`;
    const a = await axios.post(url, payload);
    console.log(a);
    dispatch({ type: PROGRESS_ACTION_TYPE, payload: true });

    // after 5 second PROGRESS :: FALSE AGAIN
    setTimeout(() => {
      dispatch({ type: PROGRESS_ACTION_TYPE, payload: false });
    }, 5000);
  };
};
// ********************************
export function ConnectionReducer(state = initState, action) {
  switch (action.type) {
    case CONNECTION_GET_ALL_ACTION_TYPE:
      return { ...state, connectionList: action.payload };

    case PROGRESS_ACTION_TYPE:
      return { ...state, progress: action.payload };
    case ADDRESS_ACTION_TYPE:
      return { ...state };

    case GET_CONNECTION_BY_ID_ACTION:
      return { ...state, searchResult: action.payload };
    default:
      return state;
  }
}

// MIDDLEWARE FOR THE ASYNC OPOERATION
// const store = createStore(ConnectionReducer, applyMiddleware(thunk));
// export { store };

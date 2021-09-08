import { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cretaeCustomerAction,
  updateCustomerAction,
} from "../redux/CustomerReducer";
import { AppNav } from "./AppNav";

export const CustomerUpsert = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const formEl = useRef();

  const [firstName, setFirstName] = useState(state.customer.uref.firstName);
  const [middleName, setMiddleName] = useState(state.customer.uref.middleName);
  const [lastName, setLastName] = useState(state.customer.uref.lastName);
  const [addharNumber, setAddharNumber] = useState(
    state.customer.uref.addharNumber
  );
  const [email, setEmail] = useState(state.customer.uref.email);
  const [mobileNumber, setMobileNumber] = useState(
    state.customer.uref.mobileNumber
  );
  const [gender, setGender] = useState(state.customer.uref.gender);

  const updateFirstName = (e) => {
    // console.log(e.target.value);
    // const aValue = e.target.value.replace(/[^\gi]/d, "");
    // setFirstName(aValue);
    setFirstName(e.target.value);
  };
  const updateMiddleName = (e) => setMiddleName(e.target.value);
  const updateLastName = (e) => setLastName(e.target.value);
  const updateAddharNumber = (e) => setAddharNumber(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateMobileNumber = (e) => {
    console.log(e.target.value);
    const numericValue = e.target.value.replace(/[^\d]/gi, "");
    setMobileNumber(numericValue);
  };

  const updateGender = (e) => setGender(e.target.value);

  const addNewCustomer = (e) => {
    // console.log(formEl.current);
    // console.log(formEl.current.checkValidity());

    e.preventDefault();

    const isFormValid = formEl.current.checkValidity();
    if (isFormValid) {
      dispatch(
        cretaeCustomerAction({
          firstName,
          middleName,
          lastName,
          addharNumber,
          email,
          mobileNumber,
          gender,
        })
      );
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };

  const updateCustomer = (e) => {
    e.preventDefault();

    const isFormValid = formEl.current.checkValidity();
    if (isFormValid) {
      dispatch(
        updateCustomerAction({
          customerId: state.customer.uref.customerId,
          firstName,
          middleName,
          lastName,
          addharNumber,
          email,
          mobileNumber,
          gender,
        })
      );

      // clear the form
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };

  return (
    // <div>
    <div
      className="justify-content-center align-items-center "
      style={{ height: "100vh" }}
    >
      <AppNav />
      {/* <div
        style={{
          backgroundImage: `url("https://picsum.photos/800/300?electricity")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      > */}
      <div className="alert alert-secondary ">
        {state.customer.uref.customerId ? (
          <h5>Customer Update</h5>
        ) : (
          <h5>Customer Registration</h5>
        )}
      </div>
      {/* 
      <div>
        <h5>Employee Create</h5>
      </div> */}
      {state.customer.progress && (
        <div className="mx-4 alert alert-success">Successful</div>
      )}

      <form ref={formEl} className="mx-4 needs-validation" noValidate>
        <div className="w-50 h-50 justify-content-center align-items-center text-center">
          <div>
            {/* style={{ paddingLeft: "400px" }} */}
            <input
              type="text"
              value={firstName}
              onChange={updateFirstName}
              className="form-control  transparent-input form-control-lg mb-1 text-light"
              placeholder="Enter First Name"
              minLength="3"
              maxLength="30"
              required

              // style={{ width: "600px" }}
            />
          </div>

          <div>
            <input
              type="text"
              value={middleName}
              onChange={updateMiddleName}
              className="form-control transparent-input form-control-lg mb-1 text-light"
              placeholder="Enter Middle Name"
              minLength="3"
              maxLength="30"
              required
              // style={{ width: "600px" }}
            />
          </div>

          <div>
            <input
              type="text"
              value={lastName}
              onChange={updateLastName}
              className="form-control transparent-input form-control-lg mb-1 text-light"
              placeholder="Enter Last Name"
              minLength="3"
              maxLength="30"
              required
              // style={{ width: "600px" }}
            />
          </div>

          <div>
            <input
              type="text"
              value={addharNumber}
              onChange={updateAddharNumber}
              className="form-control transparent-input form-control-lg mb-1 text-light"
              placeholder="Enter Adhar Number"
              maxLength="12"
              required
              // style={{ width: "600px" }}
            />
          </div>

          <div>
            <input
              type="email"
              value={email}
              onChange={updateEmail}
              className="form-control transparent-input form-control-lg mb-1 text-light"
              placeholder="Enter Email"
              minLength="3"
              maxLength="30"
              required
              // style={{ width: "600px" }}
            />
          </div>
          <div>
            <input
              type="text"
              value={mobileNumber}
              onChange={updateMobileNumber}
              className="form-control transparent-input form-control-lg mb-1  text-light"
              placeholder="Enter Mobile Number"
              minLength="3"
              maxLength="30"
              required
              // style={{ width: "600px" }}
            />
          </div>

          <div>
            <input
              type="text"
              value={gender}
              onChange={updateGender}
              className="form-control transparent-input form-control-lg mb-1 text-light"
              placeholder="Enter Gender"
              minLength="3"
              maxLength="6"
              required
              // style={{ width: "600px" }}
            />
          </div>

          <div>
            {state.customer.uref.customerId ? (
              <input
                type="button"
                onClick={updateCustomer}
                value="Update Employee"
                className="btn btn-md btn-success w-10"
              />
            ) : (
              <input
                type="button"
                onClick={addNewCustomer}
                value="Add Customer"
                className="btn btn-md btn-success w-10"
              />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

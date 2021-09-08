import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  doCreditPayment,
  PAYMENT_STATE_CLEAR_ACTION_TYPE,
} from "../redux/PaymentsReducer";
//import { Payments } from "./Pages/Payments";

import Barcode from "../Assert/Barcode.jpeg";

export const Payments = () => {
  const [cardNum, setCardNum] = useState(null);
  const [expirationMonth, setExpirationMonth] = useState(null);
  const [expirationYear, setExpirationYear] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [Cardholdername, setName] = useState(null);
  const state = useSelector((state) => state.bill);
  const payments = useSelector((state) => state.payments);
  const id = 1;
  const dispatch = useDispatch();

  function handleCreditPayment() {
    dispatch(
      doCreditPayment({
        paymentMode: "CREDIT",
        bill: {
          billId: state.bill.billId,
        },
      })
    );
  }

  const handleDebitPayment = () => {
    dispatch(
      doCreditPayment({
        paymentMode: "DEBIT",
        bill: {
          billId: state.bill.billId,
        },
      })
    );
    // console.log("Paying with debit..");
    // console.log(cardNum, expirationMonth, expirationYear, cvv, amount);
  };

  // onsubmit = () => {
  //   console.log;
  //   // <img className="barcode" src={Barcode} alt="Paytm" />
  // };

  useEffect(() => {
    return () => {
      dispatch({ type: PAYMENT_STATE_CLEAR_ACTION_TYPE });
    };
  }, []);

  if (!state.bill) {
    return (
      <div class="container">
        <div class="vertical-center">
          <h2>NO BILL FOUND FOR PAYMENT</h2>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <h2 className="mb-3 p-3 text-center bg-dark text-light">Payments</h2>
      {payments.payment?.status && (
        <div class={"payment-" + payments.payment.status}>
          Your payment {payments.payment.status}
        </div>
      )}
      <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-2">
              <button
                class="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                CREDIT CARD
              </button>
            </h5>
          </div>
          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="form-group">
              <label className="d-block">CARD NUMBER</label>
              <input
                type="number"
                name="cardNumber"
                id="cardNumber"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="d-block">EXPIRATION DATE</label>
              <div className="row">
                <div className="col">
                  <input
                    type="date"
                    name="expiratonMonth"
                    id="expiratonMonth"
                    onChange={(e) => setExpirationMonth(e.target.value)}
                    placeholder="Month"
                  />
                  {/* <select id="expiratonMonth" name="expiratonMonth" size="4" multiple  onChange={(e) => setExpirationMonth(e.target.value)}>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select> */}
                </div>
                <div className="col">
                  <input
                    type="date"
                    name="expiratonYear"
                    id="expiratonYear"
                    onChange={(e) => setExpirationYear(e.target.value)}
                    placeholder="Year"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="d-block">CVV</label>
              <input
                type="password"
                minLength={3}
                maxLength={3}
                required
                name="cvv"
                id="cvv"
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="d-block">CARD NAME</label>
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                onChange={(e) => setCardNum(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="d-block">AMOUNT</label>
              <input type="text" disabled value={state.bill.billAmount} />
            </div>
            <div className="btn btn-success" onClick={handleCreditPayment}>
              PAY
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                DEBIT CARD
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse p-3"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            <div className="form-group">
              <label className="d-block">CARD NUMBER</label>
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                onChange={(e) => setCardNum(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="d-block">EXPIRATION DATE</label>
              <div className="row">
                <div className="col">
                  <input
                    type="date"
                    name="expiratonMonth"
                    id="expiratonMonth"
                    onChange={(e) => setExpirationMonth(e.target.value)}
                    placeholder="Month"
                  />
                </div>
                <div className="col">
                  <label className="d-block"> YEAR</label>
                  <input
                    type="date"
                    name="expiratonYear"
                    id="expiratonYear"
                    onChange={(e) => setExpirationYear(e.target.value)}
                    placeholder=" Expiration Year"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="d-block">CVV</label>
              <input
                type="password"
                minLength={3}
                maxLength={3}
                required
                name="cvv"
                id="cvv"
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="d-block">CARD NAME</label>
              <input
                type="text"
                minLength={5}
                maxLength={20}
                required
                name="cardNumber"
                id="cardNumber"
                onChange={(e) => setCardNum(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="d-block">Amount</label>
              <input type="text" disabled value={state.bill.billAmount} />
            </div>
            <div className="btn btn-success" onClick={handleDebitPayment}>
              PAY
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                WALLET
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div className="card-body">
              <input
                class="form-check-input mx-1"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label
                class="form-check-label mx-4 d-block mb-2"
                for="flexRadioDefault1"
              >
                Paytm
                <div>
                  <img className="barcode" src={Barcode} alt="Paytm" />
                </div>
              </label>

              <div className="btn btn-success " onClick={handleDebitPayment}>
                Pay
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

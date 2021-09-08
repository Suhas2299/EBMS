import { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cretaeConnectionAction } from "../redux/ConnectionReducer";
import { AppNav } from "./AppNav";

export const ConnectionUpsert = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const formEl = useRef();

  const [consumerNumber, setConsumerNumber] = useState("");
  const [applicationDate, setApplicationDate] = useState("");
  const [connectionDate, setConnectionDate] = useState("");
  const [connectionStatus, setConnectionStatus] = useState("");
  const [connectiontype, setConnectionType] = useState("");

  const updateConsumerNumber = (e) => setConsumerNumber(e.target.value);
  const updateppplicationDate = (e) => setApplicationDate(e.target.value);
  const updateconnectionDate = (e) => setConnectionDate(e.target.value);

  const updateconnectionStatus = (e) => {
    setConnectionStatus(e.target.value);
    console.log(e.target.value);
  };

  const updateconnectiontype = (e) => setConnectionType(e.target.value);

  const addConnection = (e) => {
    e.preventDefault();

    const isFormValid = formEl.current.checkValidity();
    if (isFormValid) {
      dispatch(
        cretaeConnectionAction({
          consumerNumber,
          applicationDate,
          connectionDate,
          connectionStatus,
          connectiontype,

          address: {
            addressId: 1,
          },
          customer: {
            customerId: 1,
          },
        })
      );
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };

  return (
    <div>
      <AppNav />
      <div className="alert alert-secondary">
        <h3> Add Connection</h3>
      </div>

      {state.connection.progress && (
        <div className="mx-4 alert alert-success">
          Connection added Successfully
        </div>
      )}

      <form ref={formEl} className="mx-4 needs-validation" noValidate>
        <div>
          <input
            type="Number"
            value={consumerNumber}
            onChange={updateConsumerNumber}
            className="form-control form-control-lg mb-1"
            placeholder="Enter ConsumerNumber"
            minLength="1"
            maxLength="30"
            required
          />
        </div>
        <div>
          <input
            type="date"
            value={applicationDate}
            onChange={updateppplicationDate}
            className="form-control form-control-lg mb-1"
            placeholder="Enter  applicationDate"
            minLength="3"
            maxLength="30"
            required
          />
        </div>
        <div>
          <input
            type="date"
            value={connectionDate}
            onChange={updateconnectionDate}
            className="form-control form-control-lg mb-1"
            placeholder="Enter connectionDate "
            minLength="3"
            maxLength="30"
            required
          />
        </div>

        <select
          value={connectionStatus}
          onChange={updateconnectionStatus}
          className="form-control form-control-lg mb-1"
        >
          <option value="">Chose a ConnectionStatus:--</option>
          <option value="True">TRUE</option>
          <option value="False">FALSE</option>
        </select>
        {/* **************************** */}

        {/* ************************************* */}

        <select
          value={connectiontype}
          onChange={updateconnectiontype}
          className="form-control form-control-lg mb-1"
        >
          <option value="">Choose a ConnectionType:--</option>
          <option value="NON_INDUSTRIAL">NON_INDUSTRIAL</option>
          <option value="INDUSTRIAL">INDUSTRIAL</option>
          <option value="AGRICULTURAL">AGRICULTURAL</option>
        </select>

        <div>
          <input
            type="button"
            onClick={addConnection}
            value="Add Connection"
            className="btn btn-lg btn-success w-100"
          />
        </div>
      </form>
    </div>
  );
};

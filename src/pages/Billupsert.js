import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBill } from "../redux/BillReducer";

import { useHistory } from "react-router-dom";
import { AppNav } from "./AppNav";

export function Filter(props) {
  const [selectedFilter, setSelectedFilter] = useState("filterByPhone");
  const [filter, setFilter] = useState("none");

  const dispatch = useDispatch();

  function onFilterOptionChange(value) {
    setSelectedFilter(value);
  }

  function onFilterChange(value) {
    console.log(`value change ${value}`);
    setFilter(value);
  }

  function onSearch() {
    dispatch(
      getBill({
        filterType: selectedFilter,
        filter: filter,
      })
    );
  }

  let filterElement;
  console.log(`filter option : ${selectedFilter}`);
  if (selectedFilter === "filterByEmail") {
    filterElement = (
      <EmailFilter filter={filter} onFilterChange={onFilterChange} />
    );
  } else if (selectedFilter === "filterByPhone") {
    filterElement = (
      <PhoneNumberFilter filter={filter} onFilterChange={onFilterChange} />
    );
  } else if (selectedFilter === "filterByConsumerNumber") {
    filterElement = (
      <ConsumerNumberFilter filter={filter} onFilterChange={onFilterChange} />
    );
  }
  return (
    <div>
      <FilterOptions
        selectedFilter={selectedFilter}
        onFilterOptionChange={onFilterOptionChange}
      />
      {filterElement}
      <button className="btn btn-lg btn-secondary w-100" onClick={onSearch}>
        Search
      </button>
    </div>
  );
}

export const FilterOptions = (props) => {
  function handleSelectionChanged(e) {
    console.log(` option change ${e.target.value}`);
    props.onFilterOptionChange(e.target.value);
  }

  return (
    <div>
      <input
        type="radio"
        id="filterByEmail"
        name="filterOptions"
        value="filterByEmail"
        checked={props.selectedFilter === "filterByEmail"}
        onChange={handleSelectionChanged}
      />
      <label for="filterByEmail" className="mr-4">
        View By Email
      </label>

      <input
        type="radio"
        id="filterByPhone"
        name="filterOptions"
        value="filterByPhone"
        checked={props.selectedFilter === "filterByPhone"}
        onChange={handleSelectionChanged}
      />
      <label for="filterByPhone" className="mr-4">
        View By Phonenumber
      </label>

      <input
        type="radio"
        id="filterByConsumerNumber"
        name="filterOptions"
        value="filterByConsumerNumber"
        checked={props.selectedFilter === "filterByConsumerNumber"}
        onChange={handleSelectionChanged}
      />

      <label for="filterByConsumerNumber" className="mr-4">
        View By ConsumerNumber
      </label>
    </div>
  );
};
export const EmailFilter = (props) => {
  function onEmailChange(e) {
    console.log("update phone");
    props.onFilterChange({ email: e.target.value });
  }
  return (
    <div>
      <label className="mr-3">Email </label>
      <input
        type="text"
        placeholder="Enter email id"
        required={true}
        onChange={onEmailChange}
      ></input>
    </div>
  );
};

export const PhoneNumberFilter = (props) => {
  function onPhoneNumberChange(e) {
    console.log("update phone");
    props.onFilterChange({ phoneNumber: e.target.value });
  }
  return (
    <div>
      <label className="mr-3">Phone number </label>
      <input
        type="text"
        placeholder="Enter phone number"
        required
        onChange={onPhoneNumberChange}
      ></input>
    </div>
  );
};

export const ConsumerNumberFilter = (props) => {
  function onConsumerNumberChange(e) {
    console.log("update phone");
    props.onFilterChange({ consumerNumber: e.target.value });
  }
  return (
    <div>
      <label className="mr-3">Consumer Number </label>
      <input
        type="text"
        placeholder="Enter Consumer Number"
        required
        onChange={onConsumerNumberChange}
      ></input>
    </div>
  );
};
// DateRangeFilter = () => {};

export const ViewBill = () => {
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    history.push("/payment");
  }

  const state = useSelector((state) => state.bill);
  if (!state.bill) {
    return (
      <div>
        <h1>No matching bill found</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Bill Details</h1>
      {/* <label>Bill Id</label> */}
      <div>
        <label>Bill Id:</label>
        <label>{state.bill.billId}</label>
      </div>

      <div>
        <label>Connection Type:</label>
        <label>{state.bill.connectiontype} "NON_INDUSTRIAL",</label>
      </div>
      <div>
        <label>Units consumed:</label>
        <label>{state.bill.unitsConsumed}</label>
      </div>
      <div>
        <label>Bill Amount:</label>
        <label>{state.bill.billAmount} INR</label>
      </div>

      <div>
        <button
          class="center"
          className="btn btn-lg btn-secondary w-100"
          onClick={handleSubmit}
        >
          Pay Bill
        </button>
      </div>
    </div>
  );
};
export const Billupsert = () => {
  return (
    <div>
      <AppNav />
      <h1>Billupsert</h1>

      <Filter />
      <ViewBill />
    </div>
  );
};

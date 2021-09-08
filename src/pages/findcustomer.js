import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomer } from "../redux/CustomerReducer";
import { AppNav } from "./AppNav";

// import { useHistory } from "react-router-dom";

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
      getCustomer({
        filterType: selectedFilter,
        filter: filter,
      })
    );
  }

  let filterElement;
  console.log(`filter option : ${selectedFilter}`);
  if (selectedFilter === "filterByMobileNumber") {
    filterElement = (
      <MobileNumberFilter filter={filter} onFilterChange={onFilterChange} />
    );
  } else if (selectedFilter === "filterByEmail") {
    filterElement = (
      <EmailFilter filter={filter} onFilterChange={onFilterChange} />
    );
  }
  // else if (selectedFilter === "filterByConsumerNumber") {
  //   filterElement = (
  //     <ConsumerNumberFilter filter={filter} onFilterChange={onFilterChange} />
  //   );
  // }
  return (
    <div>
      <FilterOptions
        selectedFilter={selectedFilter}
        onFilterOptionChange={onFilterOptionChange}
      />
      {filterElement}
      <button className="btn btn-md btn-success w-10 m-3" onClick={onSearch}>
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
        id="filterByMobileNumber"
        name="filterOptions"
        value="filterByMobileNumber"
        checked={props.selectedFilter === "filterByMobileNumber"}
        onChange={handleSelectionChanged}
      />
      <label for="filterByMobileNumber" className="mr-4 text-light">
        <h5>View By Mobile Number</h5>
      </label>

      <input
        type="radio"
        id="filterByEmail"
        name="filterOptions"
        value="filterByEmail"
        checked={props.selectedFilter === "filterByEmail"}
        onChange={handleSelectionChanged}
      />
      <label for="filterByEmail" className="mr-4 text-light ">
        <h5> View By Email </h5>
      </label>

      {/* <input
        type="radio"
        id="filterByConsumerNumber"
        name="filterOptions"
        value="filterByConsumerNumber"
        checked={props.selectedFilter === "filterByConsumerNumber"}
        onChange={handleSelectionChanged}
      />
      <label for="filterByConsumerNumber" className="mr-4">
        View By ConsumerNumber
      </label> */}
    </div>
  );
};
export const MobileNumberFilter = (props) => {
  function onMobileNumberChange(e) {
    console.log("update phone");
    props.onFilterChange({ mobileNumber: e.target.value });
  }
  return (
    <div>
      <label className="mr-3 mb-2"></label>
      <input
        type="text"
        placeholder="Enter mobile number"
        required="true"
        onChange={onMobileNumberChange}
        className="transparent-input form-control-lg mb-1 w-10 "
      ></input>
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
      <label className="mr-3"></label>
      <input
        type="text"
        placeholder="Enter Email ID"
        required="true"
        onChange={onEmailChange}
        className="transparent-input form-control-lg mb-1 w-10 "
      ></input>
    </div>
  );
};

// export const ConsumerNumberFilter = (props) => {
//   function onConsumerNumberChange(e) {
//     console.log("update phone");
//     props.onFilterChange({ consumerNumber: e.target.value });
//   }
//   return (
//     <div>
//       <label className="mr-3">Consumer Number </label>
//       <input
//         type="text"
//         placeholder="Enter Consumer Number"
//         required="true"
//         onChange={onConsumerNumberChange}
//       ></input>
//     </div>
//   );
// };

export const ViewCustomer = () => {
  const state = useSelector((state) => state);
  if (!state.customer.searchResult)
    if (!state.customer.searchResult) {
      return (
        <div>
          <h5 className="mx-4 alert alert-success">No User found</h5>
        </div>
      );
    }
  return (
    <div>
      <h3 className=" bg-light p-2">Customer Details</h3>

      <div className="text-light">
        <div>
          <label>Mobile:</label>
          <label>{state.customer.searchResult.mobileNumber}</label>
        </div>

        <div>
          <label>FirstName:</label>
          <label>{state.customer.searchResult.firstName} </label>
        </div>
        <div>
          <label>MiddleName:</label>
          <label>{state.customer.searchResult.middleName}</label>
        </div>
        <div>
          <label>LastName:</label>
          <label>{state.customer.searchResult.lastName}</label>
        </div>
        <div>
          <label>AddharNumber:</label>
          <label>{state.customer.searchResult.addharNumber}</label>
        </div>

        {/* <div>
        <input
          type="submit"
          value="submit"
         // onClick={handleSubmit}
          className="btn btn-lg btn-secondary w-100"
        />
      </div> */}
      </div>
    </div>
  );
};

export const findcustomer = () => {
  return (
    <div>
      <AppNav />
      <h3 className="bg-light p-2 op-1 ">View Your Details</h3>

      <Filter />
      <ViewCustomer />
    </div>
  );
};

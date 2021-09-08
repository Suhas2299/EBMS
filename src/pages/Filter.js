import { useState } from "react";
import { useDispatch } from "react-redux";
import { getInactiveConnection } from "../redux/ConnectionReducer";

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
      getInactiveConnection({
        filterType: selectedFilter,
        filter: filter,
      })
    );
  }
  let filterElement;
  console.log(`filter option : ${selectedFilter}`);
  if (selectedFilter === "filterByPinCode") {
    filterElement = (
      <PinCodeFilter filter={filter} onFilterChange={onFilterChange} />
    );
  } else if (selectedFilter === "filterByVillage") {
    filterElement = (
      <VillageFilter filter={filter} onFilterChange={onFilterChange} />
    );
  } else if (selectedFilter === "filterByDistrict") {
    filterElement = (
      <DistrictFilter filter={filter} onFilterChange={onFilterChange} />
    );
  }
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
const FilterOptions = (props) => {
  function handleSelectionChanged(e) {
    console.log(` option change ${e.target.value}`);
    props.onFilterOptionChange(e.target.value);
  }

  return (
    <div>
      <input
        type="radio"
        id="filterByPinCode"
        name="filterOptions"
        value="filterByPinCode"
        checked={props.selectedFilter === "filterByPinCode"}
        onChange={handleSelectionChanged}
      />
      <label for="filterByPinCode" className="mr-4 text">
        View By Pincode
      </label>
      <input
        type="radio"
        id="filterByVillage"
        name="filterOptions"
        value="filterByVillage"
        checked={props.selectedFilter === "filterByVillage"}
        onChange={handleSelectionChanged}
      />
      <label for="filterVillage" className="mr-4 text ">
        View By Village
      </label>
      <input
        type="radio"
        id="filterByDistrict"
        name="filterOptions"
        value="filterByDistrict"
        checked={props.selectedFilter === "filterByDistrict"}
        onChange={handleSelectionChanged}
      />
      <label for="filterVillage" className="mr-4 text ">
        View By District
      </label>
    </div>
  );
};
const PinCodeFilter = (props) => {
  function onPinCodeChange(e) {
    props.onFilterChange({ pincode: e.target.value });
  }
  return (
    <div>
      <label className="mr-3 mb-2"></label>
      <input
        type="text"
        placeholder="Enter Value"
        required="true"
        onChange={onPinCodeChange}
      ></input>
    </div>
  );
};
const VillageFilter = (props) => {
  function onVillageChange(e) {
    console.log("update ");
    props.onFilterChange({ village: e.target.value });
  }
  return (
    <div>
      <label className="mr-3"></label>
      <input
        type="text"
        placeholder="Enter VillageName"
        required="true"
        onChange={onVillageChange}
        className="transparent-input form-control-lg mb-1 w-10 "
      ></input>
    </div>
  );
};
const DistrictFilter = (props) => {
  function onDistrictChange(e) {
    console.log("update ");
    props.onFilterChange({ district: e.target.value });
  }
  return (
    <div>
      <label className="mr-3"></label>
      <input
        type="text"
        placeholder="Enter District"
        required="true"
        onChange={onDistrictChange}
        className="transparent-input form-control-lg mb-1 w-10 "
      ></input>
    </div>
  );
};

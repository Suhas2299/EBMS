import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addressAction } from "../redux/ConnectionReducer";
import { AppNav } from "./AppNav";

export const Address = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const formEl = useRef();

  const [flatOrHouseNumber, setFlatOrHouseNumber] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [landmark, setLandMark] = useState("");
  const [village, setVillage] = useState("");
  const [taluka, setTaluka] = useState("");
  const [district, setDistrict] = useState("");
  const [State, setState] = useState("");
  const [pincode, setPincode] = useState("");

  // ********************
  const updateflatOrHouseNumber = (e) => setFlatOrHouseNumber(e.target.value);
  const updatebuildingName = (e) => setBuildingName(e.target.value);
  const updatelandmark = (e) => setLandMark(e.target.value);
  const updatevillage = (e) => setVillage(e.target.value);
  const updateTaluk = (e) => setTaluka(e.target.value);
  const updatedistrict = (e) => setDistrict(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updatePincode = (e) => setPincode(e.target.value);

  const addAddress = (e) => {
    e.preventDefault();

    const isFormValid = formEl.current.checkValidity();
    if (isFormValid) {
      dispatch(
        addressAction({
          flatOrHouseNumber,
          buildingName,
          landmark,
          village,
          taluka,
          district,
          State,
          pincode,
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
        <h3>Address</h3>
      </div>
      {state.connection.progress && (
        <div className="mx-4 alert alert-success">
          Address added Successfully
        </div>
      )}
      <form ref={formEl} className="mx-4 needs-validation" noValidate>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="Flat or HouseNumber">Flat or HouseNumber</label>
            <input
              value={flatOrHouseNumber}
              onChange={updateflatOrHouseNumber}
              type="text"
              class="form-control"
              id="Flat or HouseNumber"
              placeholder="Flat/HouseNumber"
              minLength="1"
              maxLength="30"
              required
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="BuildingName">BuildingName</label>
            <input
              value={buildingName}
              onChange={updatebuildingName}
              type="text"
              class="form-control"
              id="BuildingName"
              placeholder="Building Name"
              minLength="1"
              maxLength="30"
              required
            />
          </div>
          <div class="form-group col-md-6">
            <label for="LandMark">LandMark</label>
            <input
              value={landmark}
              onChange={updatelandmark}
              type="text"
              class="form-control"
              id="LandMark"
              placeholder="LandMark"
              minLength="1"
              maxLength="30"
              required
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="inputVillage">Village</label>
            <input
              value={village}
              onChange={updatevillage}
              type="text"
              class="form-control"
              id="inputVillage"
              placeholder="Enter Village"
              minLength="1"
              maxLength="30"
              required
            />
          </div>
          <div class="form-group col-md-4">
            <label for="inputTaluk">Taluk</label>
            <input
              value={taluka}
              onChange={updateTaluk}
              type="text"
              class="form-control"
              id="inputTaluk"
              placeholder="Enter Taluk"
              minLength="1"
              maxLength="30"
              required
            />
          </div>
          <div class="form-group col-md-4">
            <label for="inputDistrict">District</label>
            <input
              value={district}
              onChange={updatedistrict}
              type="text"
              class="form-control"
              id="inputDistrict"
              placeholder="Enter District"
              minLength="1"
              maxLength="30"
              required
            />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <input
              value={State}
              onChange={updateState}
              type="text"
              class="form-control"
              id="inputState"
              placeholder="Enter State"
              minLength="1"
              maxLength="30"
              required
            />
          </div>
          <div class="form-group col-md-2">
            <label for="inputPincode">Pincode</label>
            <input
              value={pincode}
              onChange={updatePincode}
              type="text"
              class="form-control"
              id="inputPincode"
              placeholder="Enter Pincode"
              minLength="1"
              maxLength="30"
              required
            />
          </div>
        </div>
        {/* <button
          type="submit"
          onClick={addAddress}
          className="btn btn-lg btn-success w-100"
        >
          Add address
        </button> */}
        <div>
          <input
            type="button"
            onClick={addAddress}
            value="Add Address"
            className="btn btn-lg btn-success w-100"
          />
        </div>
      </form>
    </div>
  );
};

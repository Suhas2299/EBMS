import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  findByIdAction,
  getAllCustomerAction,
  updateRenderAction,
} from "../redux/CustomerReducer";
import { AppNav } from "./AppNav";
import { useHistory } from "react-router-dom";
import {
  Nav,
  Navbar,
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
} from "react-bootstrap";

export const CustomerList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllCustomerAction());
  }, []);

  const updateRecord = (item) => {
    console.log("Update Record", item);

    // 3 :: updating the store
    dispatch(updateRenderAction(item));

    // navigateing to the page
    history.push("/customer-upsert");
  };

  // const [id, setId] = useState("");
  // const updateId = (e) => {
  //   console.log(e.target.value);
  //   setId(e.target.value);
  // };

  // const findById = (e) => {
  //   console.log(e);
  //   dispatch(
  //     findByIdAction({
  //       id,
  //     })
  //   );
  // };

  return (
    <div>
      <AppNav />
      <div className="alert alert-secondary mb-2 p-2">
        <h3 title="id2">Customer List</h3>
      </div>
      {/* 
      <InputGroup className="mb-4">
        <FormControl
          placeholder="Find Consumers"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          type="text"
          value={id}
          onChange={updateId}
        />
        <DropdownButton
          as={InputGroup.Append}
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-2"
        >
          <Dropdown.Item href="#">
            <input
              type="button"
              value="Find By Id"
              className="btn btn-outline-success btn-sm  mr-1"
              // onClick={updateRecord} :1
              // onClick={findById()}
            />
          </Dropdown.Item>
          {/* <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item> */}
      {/* <Dropdown.Divider /> */}
      {/* <Dropdown.Item href="#">Separated link</Dropdown.Item> */}

      <table className="table">
        <thead className="thead-secondary text-light">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">AddharNumber</th>
            <th scope="col">FirstName</th>
            <th scope="col">MiddleName</th>
            <th scope="col">LastName</th>
            <th scope="col">MobileNumber</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col"> Action</th>
          </tr>
        </thead>
        <tbody className="thead-secondary text-light">
          {state.customer.customerList.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.customerId}</th>
              <td>{item.addharNumber}</td>
              <td>{item.firstName}</td>
              <td>{item.middleName}</td>
              <td>{item.lastName}</td>
              <td>{item.mobileNumber}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>
                <input
                  type="button"
                  value="Update"
                  className="btn btn-outline-success btn-sm  mr-1"
                  // onClick={updateRecord} :1
                  onClick={() => updateRecord(item)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

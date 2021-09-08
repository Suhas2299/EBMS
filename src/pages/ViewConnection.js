import { useSelector } from "react-redux";
import { getConnection } from "../redux/ConnectionReducer";

export const ViewConnection = () => {
  const state = useSelector((state) => state);
  console.log("state", state.connection.searchResult);

  if (state.connection.searchResult == null) {
    state.connection.searchResult = [];
    console.log("state", state.searchResult);
  }
  if (
    !state.connection.searchResult ||
    state.connection.searchResult.length <= 0
  ) {
    return (
      <div>
        <h3 className="mx-4 alert alert-success">No User Found!!!</h3>
      </div>
    );
  }

  return (
    <div>
      <h3 className="bg-light p-3">Connection Details1</h3>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ConnectionId</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">ConnectionStatus</th>
            <th scope="col">PinCode</th>
            <th scope="col">FlatOrHouseNumber</th>
            <th scope="col">BuildingName</th>
            <th scope="col">Landmark</th>
          </tr>
        </thead>

        <tbody>
          {state.connection.searchResult &&
            state.connection.searchResult.length > 0 &&
            state.connection.searchResult.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.connectionId}</th>
                <td> {item.customer.firstName}</td>

                <td> {item.customer.lastName} </td>

                <td> {item.connectionStatus ? "yes" : "No"} </td>

                <td>{item.address.pincode} </td>

                <td> {item.address.flatOrHouseNumber} </td>

                <td>{item.address.buildingName}</td>

                <td> {item.address.landmark} </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

import { Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signOut } from "../redux/UserReducer";

export const AppNav = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const signOutUser = () => {
    dispatch(signOut());
    history.push("/");
  };

  return (
    <Navbar bg="info" varient="dark" expand="lg">
      <Navbar.Brand href="#home" className="text-light" class="dropbtn">
        EBMS
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home">
            <h5 class="app1">Home</h5>
          </Nav.Link>
          <Nav.Link as={Link} to="/customer-upsert">
            <h5 class="app1">CustomerRegister</h5>
          </Nav.Link>
          <Nav.Link as={Link} to="/customer-list">
            <h5 class="app1">CustomerList</h5>
          </Nav.Link>
          <Nav.Link as={Link} to="/find-customer">
            <h5 class="app1">Findcustomer</h5>
          </Nav.Link>
          <Nav.Link as={Link} to="/reading-upsert">
            <h5 class="app1">Reading</h5>
          </Nav.Link>
          <Nav.Link as={Link} to="/bill-upsert">
            <h5 class="app1">Bill</h5>
          </Nav.Link>
          <Nav.Link as={Link} to="/user-signin">
            <h5 class="app1">Log out</h5>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

import logo from "./logo.svg";

import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import { Readingupsert } from "./Pages/Readingupsert";
import { Billupsert } from "./Pages/Billupsert";
import { Payments } from "./Pages/Payments";
import { Home } from "./Pages/Home";

import { UserSignIn } from "./Pages/UserSignIn";
import { UserSignUp } from "./Pages/UserSignUp";
import { useSelector } from "react-redux";
import { AppNav } from "./Pages/AppNav";
import { CustomerList } from "./Pages/CustomerList";
import { CustomerUpsert } from "./Pages/CustomerUpsert";
import { findcustomer } from "./Pages/findcustomer";
import { AboutUs } from "./Pages/AboutUs";

function App() {
  const history = useHistory();
  const state = useSelector((state) => state);

  const loginSuccessFromStorage = localStorage.getItem("loginSuccess");

  if (loginSuccessFromStorage !== "true") {
    history.push("/");
  }
  return (
    <>
      <Route exact path="/customer-upsert" component={CustomerUpsert} />

      <Route exact path="/customer-list" component={CustomerList} />
      <Route exact path="/find-customer" component={findcustomer} />
      <Route exact path="/reading-upsert" component={Readingupsert} />
      <Route exact path="/bill-upsert" component={Billupsert} />
      <Route exact path="/payment" component={Payments} />
      <Route exact path="/" component={UserSignIn} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/user-signin" component={UserSignIn} />
      <Route exact path="/user-signup" component={UserSignUp} />
      <Route exact path="/about-us" component={AboutUs} />
    </>
  );
}

export default App;

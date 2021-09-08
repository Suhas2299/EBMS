import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSignUpAction } from "../redux/UserReducer";

export const UserSignUp = () => {
  const formEl = useRef();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const updateUserName = (e) => setUserName(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);

  const signUPUser = (e) => {
    e.preventDefault();
    // console.log("I WILL AUTHENTECATE");
    const isFormValid = formEl.current.checkValidity();
    console.log(isFormValid);
    if (isFormValid) {
      // dispatch
      dispatch(userSignUpAction({ userName, password }));
      setUserName("");
      setPassword("");
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="w-50 h-50">
        <h1 className="text-dark text-center mb-4">SIGN UP</h1>

        {state.progress && (
          <div className="text-center alert alert-success mb-4">
            <a>Successfully SignedUp</a>
          </div>
        )}

        <form ref={formEl} className="needs-validation" noValidate>
          <div>
            <input
              type="email"
              value={userName}
              onChange={updateUserName}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              placeholder="Enter UserName..."
              className="form-control mb-1"
              required
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={updatePassword}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6}"
              placeholder="Enter password"
              className="form-control mb-1"
              required
            />
          </div>

          <div>
            <input
              type="button"
              value="Register"
              onClick={signUPUser}
              className="btn btn-success btn-lg mt-2 mb-2 w-100"
            />
          </div>

          <div>
            <Link to="/user-signin">
              <input
                type="button"
                value="Signin Here"
                className="btn btn-outline-info btn-lg btn-link-light w-100"
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginUser } from "../redux/UserReducer";
// import image1 from "../asset/image1.jpg";

export const UserSignIn = () => {
  const formEl = useRef();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let history = useHistory();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const updateUserName = (e) => setUserName(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);

  const signInUser = (e) => {
    e.preventDefault();
    // console.log("I WILL AUTHENTECATE");
    const isFormValid = formEl.current.checkValidity();
    console.log(isFormValid);

    if (isFormValid) {
      // dispatch
      dispatch(loginUser({ userName, password }));
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };

  if (state.user.loginSuccess === true) {
    history.push("/home");
  }

  return (
    <div
      className=" d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      {/* <div>
        <img width="80%" src={image1} alt="image1.jpg" />
      </div> */}
      <div className="w-50">
        {state.loginValidation && (
          <div className="text-center alert alert-danger mb-4">
            <a>Invalid Credentials</a>
          </div>
        )}

        <h1 className="text-dark text-center mt-5 mb-5">SIGN IN</h1>

        {/* <h6 className="text-center alert alert-danger">Invalid Credentials</h6> */}

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
              className="form-control mb-1 mt-2"
              required
            />
          </div>

          <div>
            <input
              type="button"
              value="Login"
              onClick={signInUser}
              className="btn btn-secondary text-light text-lg w-100 mb-2 mt-4"
            />
          </div>

          <div>
            <Link to="/user-signup">
              <input
                type="button"
                value="SignUp Here"
                className="btn btn-outline-light btn-link w-100"
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

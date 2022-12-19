import React, { useState } from "react";
import "../Registration/Registration.css";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const validation = () => {
    let formisValid = true;
    if (!email) {
      setEmailError("Please enter Email");
      formisValid = false;
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError("Please enter Password");
      formisValid = false;
    } else {
      setPasswordError("");
    }
    return formisValid;
  };
  const submitButton = () => {
    if (validation()) {
      setEmail("");
      setPassword("");
      console.log("email", email);
      console.log("password", password);
    }
  };
  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
      }}
    >
      <div className="overlay"></div>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div
              className="col-12 col-md-9 col-lg-7 col-xl-6"
              // style={{ width: "40%", height: "648px" }}
            >
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Login</h2>

                  <div className="form-outline">
                    <input
                      type="email"
                      id="form3Example3cg"
                      placeholder="a@gmail.com"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={(e) => [
                        setEmail(e.target.value),
                        setEmailError(""),
                      ]}
                    />
                  </div>
                  <div className="error">{emailError}</div>
                  <div className="form-outline mt-3">
                    <input
                      type="password"
                      id="form3Example4cg"
                      placeholder="Password"
                      className="form-control form-control-lg"
                      value={password}
                      onChange={(e) => [
                        setPassword(e.target.value),
                        setPasswordError(""),
                      ]}
                    />
                  </div>
                  <div className="error">{passwordError}</div>
                  <div className="d-flex justify-content-center mt-3">
                    <button
                      type="button"
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      onClick={() => submitButton()}
                    >
                      Login
                    </button>
                  </div>

                  <p className="text-center text-muted mt-3">
                    New Here?
                    <a href="/signup" className="fw-bold text-body">
                      <u>Register Here</u>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

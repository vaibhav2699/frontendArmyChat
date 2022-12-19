import React, { useState } from "react";
import { useNavigate } from "react-router";

// import "./Registration.css";
const RegistrationPage = () => {
  const navigate=useNavigate()
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileNo, setMobileNo] = useState();
  const [mobileNoError, setMobileNoError] = useState("");

  const validation = () => {
    let formisValid = true;
    if (!userName) {
      setUserNameError("Please enter User Name");
      formisValid = false;
    } else {
      setUserNameError("");
    }
    if (!password) {
      setPasswordError("Please enter Password");
      formisValid = false;
    } else {
      setPasswordError("");
    }
    if (!email) {
      setEmailError("Please enter Email");
      formisValid = false;
    } else {
      setEmailError("");
    }
    if (!mobileNo) {
      setMobileNoError("Please enter Mobile No");
      formisValid = false;
    } else {
      setMobileNoError("");
    }
    return formisValid;
  };
  const submitButton = () => {
    if (validation()) {
      navigate("/")
      setUserName("");
      setEmail("");
      setPassword("");
      setMobileNo("");
      console.log("userName", userName);
      console.log("password", password);
      console.log("email", email);
      console.log("mobileNo", mobileNo);
    } else {
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
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div
              className="col-12 col-md-9 col-lg-7 col-xl-6"
              // style={{ width: "40%", height: "648px" }}
            >
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                   Registration
                  </h2>

                  <div className="form-outline">
                    <input
                      type="text"
                      id="form3Example1cg"
                      className="form-control form-control-lg "
                      placeholder="UserName"
                      value={userName}
                      onChange={(e) => [
                        setUserName(e.target.value),
                        setUserNameError(""),
                      ]}
                    />
                  </div>
                  <div>{userNameError}</div>
                  <div className="form-outline mt-3">
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
                  <div>{emailError}</div>
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
                  <div>{passwordError}</div>
                  <div className="form-outline mt-3">
                    <input
                      type="text"
                      id="form3Example4cdg"
                      className="form-control form-control-lg"
                      placeholder="1234567890"
                      value={mobileNo}
                      onChange={(e) => [
                        setMobileNo(e.target.value),
                        setMobileNoError(""),
                      ]}
                    />
                  </div>
                  <div>{mobileNoError}</div>
                  <div className="d-flex justify-content-center mt-3">
                    <button
                      type="button"
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      onClick={() => submitButton()}
                    >
                      Create
                    </button>
                  </div>

                  <p className="text-center text-muted mt-3">
                    Have already an account?
                    <a href="/" className="fw-bold text-body">
                      <u>Login here</u>
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

export default RegistrationPage;

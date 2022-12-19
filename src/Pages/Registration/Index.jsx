import React, { useState } from "react";
// import "./Registration.css";
const RegistrationPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState();

  const submitButton = () => {
    setUserName("");
    setEmail("");
    setPassword("");
    setMobileNo("");
    console.log("userName", userName);
    console.log("password", password);
    console.log("email", email);
    console.log("mobileNo", mobileNo);
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
                    Create an account
                  </h2>
                  <label className="form-label" htmlFor="form3Example1cg">
                    User Name
                  </label>
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form3Example1cg"
                      className="form-control form-control-lg "
                      placeholder="UserName"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>

                  <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example3cg">
                      Email
                    </label>
                    <input
                      type="email"
                      id="form3Example3cg"
                      placeholder="a@gmail.com"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example4cg">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4cg"
                      placeholder="Password"
                      className="form-control form-control-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example4cdg">
                      Mobile No
                    </label>
                    <input
                      type="text"
                      id="form3Example4cdg"
                      className="form-control form-control-lg"
                      placeholder="1234567890"
                      value={mobileNo}
                      onChange={(e) => setMobileNo(e.target.value)}
                    />
                  </div>

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

import React, { useState } from "react";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const submitButton = () => {
    setEmail("");
    setPassword("");
    console.log("password", password);
    console.log("email", email);
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
                    New Heare?
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

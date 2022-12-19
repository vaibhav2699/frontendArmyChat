import React, { useState } from "react";
// import "./Registration.css";
const RegistrationPage = () => {
  //   const [userName, setUserName] = useState();
  //   const [password, setPassword] = useState();
  //   const [email, setEmail] = useState();
  //   const [mobileNo, setMobileNo] = useState();
  //   console.log(userName);

  //   const submitButton = () => {};

  return (
    // <div>
    //   <form>
    //     <div className="d-grid">
    //       <div className="d-flex">
    //         <label>User Name</label>
    //         <input
    //           className="input-field"
    //           type="text"
    //           placeholder="userName"
    //           value={userName}
    //           onChange={(e) => setUserName(e.target.value)}
    //         />
    //       </div>
    //       <div className="d-flex">
    //         <label>Password</label>
    //         <input
    //           className="input-field"
    //           type="password"
    //           placeholder="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </div>
    //     </div>
    //   </form>
    // </div>
    <section
      class=" bg-image"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
      }}
    >
      <div class="mask d-flex align-items-center  gradient-custom-3">
        <div class="container ">
          <div class="row d-flex justify-content-center align-items-center ">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6" style={{width:"40%"}}>
              <div class="card" style={{ borderRadius: "15px" }}>
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">
                    Create an account
                  </h2>

                  <form>
                    <div class="form-outline">
                      <input
                        type="text"
                        id="form3Example1cg"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form3Example1cg">
                        Your Name
                      </label>
                    </div>

                    <div class="form-outline">
                      <input
                        type="email"
                        id="form3Example3cg"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form3Example3cg">
                        Your Email
                      </label>
                    </div>

                    <div class="form-outline">
                      <input
                        type="password"
                        id="form3Example4cg"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form3Example4cg">
                        Password
                      </label>
                    </div>

                    <div class="form-outline">
                      <input
                        type="password"
                        id="form3Example4cdg"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form3Example4cdg">
                        Repeat your password
                      </label>
                    </div>

                    {/* <div class="form-check d-flex justify-content-center ">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                      />
                      <label class="form-check-label" for="form2Example3g">
                        I agree all statements in{" "}
                        <a href="#!" class="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div> */}

                    <div class="d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Register
                      </button>
                    </div>

                    <p class="text-center text-muted  mb-0">
                      Have already an account?{" "}
                      <a href="#!" class="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>
                  </form>
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

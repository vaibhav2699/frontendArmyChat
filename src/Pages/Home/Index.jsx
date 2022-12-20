import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const [showChatBox, setShowChatBox] = useState(false);

  const chatBoxButton = () => {
    if (showChatBox === false) {
      setShowChatBox(true);
    } else {
      setShowChatBox(false);
    }
  };
  return (
    <div>
      <div className="sidebar">
        <Link className="active" to="#home">
          Home
        </Link>
        <Link to="#news">News</Link>
        <Link to="#contact">Contact</Link>
        <Link to="#about">About</Link>
        <div>
          <button className="chat-button" onClick={() => chatBoxButton()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chat-dots"
              viewBox="0 0 16 16"
            >
              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
            </svg>
          </button>
        </div>
      </div>
      {showChatBox ? (
        // <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5" style={{ marginLeft: "15%" }}>
          <div className="row">
            <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
              <h5 className="font-weight-bold mb-3 text-center text-lg-start">
                Users
              </h5>
              <div className="card">
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    <li
                      className="p-2 border-bottom"
                      // style={{ backgroundColor: "#eee" }}
                    >
                      <Link
                        to="#!"
                        className="d-flex justify-content-between text-decoration-none"
                      >
                        <div className="d-flex flex-row">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                            alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width="60"
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">John Doe</p>
                            <p className="small text-muted">
                              Hello, Are you there?
                            </p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-muted mb-1">Just now</p>
                          <span className="badge bg-danger float-end">1</span>
                        </div>
                      </Link>
                    </li>
                    <li className="p-2 border-bottom">
                      <Link
                        to="#!"
                        className="d-flex justify-content-between text-decoration-none"
                      >
                        <div className="d-flex flex-row">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp"
                            alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width="60"
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">Danny Smith</p>
                            <p className="small text-muted">
                              Lorem ipsum dolor sit.
                            </p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-muted mb-1">5 mins ago</p>
                        </div>
                      </Link>
                    </li>
                    <li className="p-2 border-bottom">
                      <Link
                        to="#!"
                        className="d-flex justify-content-between text-decoration-none"
                      >
                        <div className="d-flex flex-row">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                            alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width="60"
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">Alex Steward</p>
                            <p className="small text-muted">
                              Lorem ipsum dolor sit.
                            </p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-muted mb-1">Yesterday</p>
                        </div>
                      </Link>
                    </li>
                    <li className="p-2 border-bottom">
                      <Link
                        to="#!"
                        className="d-flex justify-content-between text-decoration-none"
                      >
                        <div className="d-flex flex-row">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
                            alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width="60"
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">Ashley Olsen</p>
                            <p className="small text-muted">
                              Lorem ipsum dolor sit.
                            </p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-muted mb-1">Yesterday</p>
                        </div>
                      </Link>
                    </li>
                    <li className="p-2 border-bottom">
                      <Link
                        to="#!"
                        className="d-flex justify-content-between text-decoration-none"
                      >
                        <div className="d-flex flex-row">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp"
                            alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width="60"
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">Kate Moss</p>
                            <p className="small text-muted">
                              Lorem ipsum dolor sit.
                            </p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-muted mb-1">Yesterday</p>
                        </div>
                      </Link>
                    </li>
                    <li className="p-2 border-bottom">
                      <Link
                        to="#!"
                        className="d-flex justify-content-between text-decoration-none"
                      >
                        <div className="d-flex flex-row">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                            alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width="60"
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">Lara Croft</p>
                            <p className="small text-muted">
                              Lorem ipsum dolor sit.
                            </p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-muted mb-1">Yesterday</p>
                        </div>
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link
                        to="#!"
                        className="d-flex justify-content-between text-decoration-none"
                      >
                        <div className="d-flex flex-row">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width="60"
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">Brad Pitt</p>
                            <p className="small text-muted">
                              Lorem ipsum dolor sit.
                            </p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-muted mb-1">5 mins ago</p>
                          <span className="text-muted float-end">
                            <i className="fas fa-check" aria-hidden="true"></i>
                          </span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
{/* <div className="dividers-block"></div> */}
            <div className="col-md-6 col-lg-7 col-xl-8">
              {/* <ul className="list-unstyled">
                <li className="d-flex justify-content-between mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                    alt="avatar"
                    className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                    width="60"
                  />
                  <div className="card">
                    <div className="card-header d-flex justify-content-between p-3">
                      <p className="fw-bold mb-0">Brad Pitt</p>
                      <p className="text-muted small mb-0">
                        <i className="far fa-clock"></i> 12 mins ago
                      </p>
                    </div>
                    <div className="card-body">
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="d-flex justify-content-between mb-4">
                  <div className="card w-100">
                    <div className="card-header d-flex justify-content-between p-3">
                      <p className="fw-bold mb-0">Lara Croft</p>
                      <p className="text-muted small mb-0">
                        <i className="far fa-clock"></i> 13 mins ago
                      </p>
                    </div>
                    <div className="card-body">
                      <p className="mb-0">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium.
                      </p>
                    </div>
                  </div>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                    alt="avatar"
                    className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                    width="60"
                  />
                </li>
                <li className="d-flex justify-content-between mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                    alt="avatar"
                    className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                    width="60"
                  />
                  <div className="card">
                    <div className="card-header d-flex justify-content-between p-3">
                      <p className="fw-bold mb-0">Brad Pitt</p>
                      <p className="text-muted small mb-0">
                        <i className="far fa-clock"></i> 10 mins ago
                      </p>
                    </div>
                    <div className="card-body">
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="bg-white mb-3">
                  <div className="form-outline">
                    <textarea
                      className="form-control"
                      id="textAreaExample2"
                      rows="4"
                    ></textarea>
                    <label className="form-label" for="textAreaExample2">
                      Message
                    </label>
                  </div>
                </li>
                <button
                  type="button"
                  className="btn btn-info btn-rounded float-end"
                >
                  Send
                </button>
              </ul> */}
            </div>
          </div>
        </div>
      ) : (
        // </section>
        ""
      )}
    </div>
  );
};

export default Home;
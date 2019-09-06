import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div>
        <section className="top-signin">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 logo">
                <div className="image-logo">
                  <h1>Group Team 8</h1>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 sign-in">
                <div className="signin-area">
                  <div className="username-box">
                    <label htmlFor="username">Email or phone number</label>
                    <input type="text" name="username" id />
                  </div>
                  <div className="password-box">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id />
                  </div>
                  <div className="button-box">
                    <Link to="/todo">
                      <button>
                        Masuk
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="body-content">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 sideleft">
                <div className="title">
                  <h3>
                    Group Team 8 can help you to save your to-do-list for your activity for everyday.
                  </h3>
                </div>
                <img src={require("../../Assets/images/todolist-gt8.png")} alt="" />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 sideright">
                <div className="title">
                  <h3>
                    Create an account todolist
                  </h3>
                  <p>
                    It's Quick and Easy
                  </p>
                </div>
                <div className="signup-box">
                  <input name="email" type="text" placeholder="example@glints.com" />
                  <input name="password" type="password" placeholder="your password" />
                  <input name="passwordconfirm" type="password" placeholder="confirm your password" />
                  <button className="signup">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <p className="team">
                  GA Team 8
                </p>
                <hr />
                <p className="copyright">
                  Glints Academy © 2019
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

"use client";
  
import React from "react";
import Link from "next/link";

const LoginForm: React.FC = () => {
  return (
    <>
      <div className="login-form">
        <h2>Login</h2>

        <form>
          <div className="form-group">
            <label>Username or email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username or email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
              <div className="form-check m-0 p-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Remember me
                </label>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
              <Link href="#" className="lost-your-password">
                Lost your password?
              </Link>
            </div>
          </div>

          <button type="submit">Log In</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;

"use client";
  
import React from "react";
import Image from "next/image";

const Subscribe: React.FC = () => {
  return (
    <>
      <div className="subscribe-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="subscribe-image">
                <Image
                  src="/img/subscribe-img1.png"
                  alt="image"
                  width={597}
                  height={356}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="subscribe-content">
                <h2>We Like to Start Your Project With Us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>

                <form className="newsletter-form">
                  <input
                    type="text"
                    className="input-newsletter"
                    placeholder="Enter your email address"
                    name="email"
                    required
                  />
                  <button type="submit" className="default-btn">
                    <i className="flaticon-tick"></i>
                    Subscribe Now <span></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="vector-shape6">
          <Image
            src="/img/shape/vector-shape6.png"
            alt="image"
            width={533}
            height={413}
          />
        </div>
      </div>
    </>
  );
};

export default Subscribe;

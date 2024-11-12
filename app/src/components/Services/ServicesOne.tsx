"use client";
  
import React from "react";
import Link from "next/link";

const ServicesOne: React.FC = () => {
  return (
    <>
      <div className="solutions-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-rocket"></i>
                </div>
                <h3>
                  <Link href="/services/details/">Startup Applications</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  adipiscing aliqua.
                </p>

                <Link href="/services/details/" className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>

                <h3>
                  <Link href="/services/details/">SaaS Solutions</Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  adipiscing aliqua.
                </p>

                <Link href="/services/details/" className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-money"></i>
                </div>

                <h3>
                  <Link href="/services/details/">eCommerce Platforms</Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  adipiscing aliqua.
                </p>

                <Link href="/services/details/" className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-segmentation"></i>
                </div>

                <h3>
                  <Link href="/services/details/">Research</Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  adipiscing aliqua.
                </p>

                <Link href="/services/details/" className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>

                <h3>
                  <Link href="/services/details/">Analytics</Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  adipiscing aliqua.
                </p>

                <Link href="/services/details/" className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-settings"></i>
                </div>

                <h3>
                  <Link href="/services/details/">Technology</Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  adipiscing aliqua.
                </p>

                <Link href="/services/details/" className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesOne;

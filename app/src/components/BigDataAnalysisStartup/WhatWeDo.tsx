"use client";
  
import React from "react";
import Link from "next/link";

const WhatWeDo: React.FC = () => {
  return (
    <>
      <div className="what-we-do-area bg-fafafb pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>What We Do</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-what-we-do-box">
                <div className="icon">
                  <i className="flaticon-segmentation"></i>
                </div>
                <h3>
                  <Link href="/services/details/">Research</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit consectetur, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt.
                </p>

                <Link href="/services/details/" className="link">
                  Market Research <i className="flaticon-right"></i>
                </Link>
                <Link href="/services/details/" className="link">
                  Investment Research <i className="flaticon-right"></i>
                </Link>
                <Link href="/services/details/" className="read-more-btn">
                  <i className="flaticon-right"></i> Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-what-we-do-box">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>
                <h3>
                  <Link href="/services/details/">Analytics</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit consectetur, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt.
                </p>

                <Link href="/services/details/" className="link">
                  Data Analytics <i className="flaticon-right"></i>
                </Link>
                <Link href="/services/details/" className="link">
                  Business Intelligence <i className="flaticon-right"></i>
                </Link>
                <Link href="/services/details/" className="read-more-btn">
                  <i className="flaticon-right"></i>Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-what-we-do-box">
                <div className="icon">
                  <i className="flaticon-settings"></i>
                </div>
                <h3>
                  <Link href="/services/details/">Technology</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit consectetur, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt.
                </p>

                <Link href="/services/details/" className="link">
                  Intelligence Automation <i className="flaticon-right"></i>
                </Link>
                <Link href="/services/details/" className="link">
                  Quality Engineering <i className="flaticon-right"></i>
                </Link>
                <Link href="/services/details/" className="read-more-btn">
                  <i className="flaticon-right"></i> Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;

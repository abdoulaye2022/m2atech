"use client";
  
import React from "react";
import Link from "next/link";

const FeaturedServices: React.FC = () => {
  return (
    <>
      <div className="featured-services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>How We Take Your Business From Good To Great</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="flaticon-analysis"></i>
                </div>
                <h3>
                  <Link href="/services/details/">Analyze Your Data Needs</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link href="/services/details/" className="read-more-btn">
                  <i className="flaticon-right"></i> Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="flaticon-structure"></i>
                </div>
                <h3>
                  <Link href="/services/details/">Develop A Customized Plan</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link href="/services/details/" className="read-more-btn">
                  <i className="flaticon-right"></i> Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="flaticon-idea"></i>
                </div>
                <h3>
                  <Link href="/services/details/">Implement Your Solution</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

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

export default FeaturedServices;

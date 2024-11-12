"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Solutions: React.FC = () => {
  return (
    <>
      <div className="solutions-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <Image src="/img/star-icon.png" alt="image" width={32} height={34} />
              Our Solutions
            </span>
            <h2>We Different From Others Should Choose Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-rocket"></i>
                </div>
                <h3>
                  <Link href="/services/details/2">Startup Applications</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  adipiscing aliqua.
                </p>

                <Link href="/services/details/2" className="view-details-btn">
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
                  <Link href="/services/details/2">SaaS Solutions</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  adipiscing aliqua.
                </p>

                <Link href="/services/details/2" className="view-details-btn">
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
                  <Link href="/services/details/2">eCommerce Platforms</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  adipiscing aliqua.
                </p>

                <Link href="/services/details/2" className="view-details-btn">
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

export default Solutions;

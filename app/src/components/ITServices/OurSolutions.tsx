"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurSolutions: React.FC = () => {
  return (
    <>
      <div className="solutions-area pb-70">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <span className="sub-title">
              <Image src="/img/star-icon.png" alt="image" width={32} height={34} />
              Our Solutions
            </span>
            <h2>We Different From Others Should Choose Us</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p> */}
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-rocket"></i>
                </div>
                <h3>
                  <Link href="/services/details/">🚀 Tailored Solutions & Innovation</Link>
                </h3>
                <p>
                  We create custom digital solutions that match your unique needs, combining innovation and user-friendly design.
                </p>

                <Link href="/services/details/" className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>

                <h3>
                  <Link href="/services/details/">✅ Your Success, Our Priority</Link>
                </h3>

                <p>

                  We focus on delivering projects on time with transparent communication and personalized support.
                </p>

                <Link href="/services/details/" className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-money"></i>
                </div>

                <h3>
                  <Link href="/services/details/">🎯 Client-Centric Approach</Link>
                </h3>

                <p>

                  Your business goals drive our solutions, ensuring a perfect balance of functionality, design, and performance.
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

export default OurSolutions;

"use client";

import React from "react";
import Image from "next/image";

const OurServices: React.FC = () => {
  return (
    <>
      {/* Service Left Image Style */}
      <div className="about-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="about-img"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <Image
                  src="/img/services/service1.png"
                  alt="image"
                  width={810}
                  height={620}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title">
                    <Image
                      src="/img/star-icon.png"
                      alt="image"
                      width={32}
                      height={34}
                    />{" "}
                    Services
                  </span>

                  <h2>Tailored Digital Solutions for Your Business</h2>
                  <p>
                  At M2ATech, we provide custom digital solutions designed to elevate your business. Whether you need modern websites, powerful mobile apps, 
                  bespoke software, or strategic SEO optimization, our expertise ensures innovative tools that drive your success.
                  </p>
                  <ul className="about-list mb-0">
                    <li>
                      <i className="flaticon-tick"></i>
                      Modern & Responsive Web Design
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Mobile Application Development
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Customized Software for Your Needs
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      SEO Optimization for Maximum Visibility
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Left Image Style */}
    </>
  );
};

export default OurServices;

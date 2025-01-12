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

                  <h2>Custom Digital Solutions</h2>
                  <p>
                    At M2ATech, we specialize in creating tailored digital solutions to meet your unique business needs. From mobile apps to websites and custom software, we deliver innovative tools designed to drive your success.
                  </p>
                  <ul className="about-list mb-0">
                    <li>
                      <i className="flaticon-tick"></i>
                      Mobile App Development
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Responsive Website Design
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Custom Software Solutions
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      User-Friendly Interfaces
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Scalable and Secure Systems
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Cross-Platform Compatibility
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Ongoing Support & Maintenance
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Innovative Technology Integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Left Image Style */}

      {/* Service Right Image Style */}
      <div className="our-mission-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="our-mission-content">
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

                  <h2>Design & Development</h2>
                  <p>
                    At M2ATech, we combine creativity and cutting-edge technology to deliver stunning designs and robust development solutions. Whether it's a website, mobile app, or custom software, we ensure your digital presence is both functional and visually captivating.
                  </p>

                  <ul className="our-mission-list mb-0">
                    <li>
                      <i className="flaticon-tick"></i>
                      Responsive Design
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      React JS & Next JS Development
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Flutter Mobile App Development
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Node JS Backend Development
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Laravel Web Solutions
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      UX/UI Design
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      E-commerce Solutions
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Custom Web Design
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="our-mission-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <Image
                  src="/img/services/service2.png"
                  alt="image"
                  width={810}
                  height={620}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Right Image Style */}
    </>
  );
};

export default OurServices;

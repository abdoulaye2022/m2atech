"use client";

import React from "react";
import Image from "next/image";

const OurFeatures: React.FC = () => {
  return (
    <>
      <div className="services-area pt-100 pb-70 bg-f1f8fb">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <span className="sub-title">
              <Image
                src="/img/star-icon.png"
                alt="image"
                width={32}
                height={34}
              />
              Our Features
            </span>

            <h2>We’re Here To Help</h2>
            <p>
              At M2ATech, we specialize in delivering innovative web and software solutions tailored to your needs. From cutting-edge technology to seamless user experiences, we’ve got you covered.
            </p>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="single-services-item-box">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon1.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>Custom Web Development</h3>
                <p>
                  We build responsive, high-performance websites using modern technologies like React JS, Next JS, and Laravel.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="single-services-item-box">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon2.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>Mobile App Development</h3>
                <p>
                  Create powerful, cross-platform mobile apps with Flutter, designed for both Android and iOS.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="single-services-item-box">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon3.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>User-Centric Design</h3>
                <p>
                  We craft intuitive and visually stunning UX/UI designs that enhance user engagement and satisfaction.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="single-services-item-box">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon4.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>Backend Solutions</h3>
                <p>
                  Robust backend development with Node JS and Laravel, ensuring scalability and security for your applications.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <div className="single-services-item-box">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon5.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>E-commerce Solutions</h3>
                <p>
                  Build feature-rich e-commerce platforms that drive sales and provide seamless shopping experiences.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
              data-aos-once="true"
            >
              <div className="single-services-item-box">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon6.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>Ongoing Support</h3>
                <p>
                  We provide continuous maintenance and support to ensure your digital solutions remain up-to-date and efficient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeatures;

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServicesStyleTwo: React.FC = () => {
  return (
    <>
      <div className="services-area pt-100 pb-70 bg-f1f8fb">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  {/* <Image
                    src="/img/services/web-development.png"
                    alt="Web Development"
                    width={78}
                    height={70}
                  /> */}
                </div>
                <h3>
                  <Link href="/services/details/">Web Development</Link>
                </h3>
                <p>
                  We create responsive, user-friendly websites using modern technologies like React JS, Next JS, and Laravel to help your business stand out online.
                </p>

                <Link href="/services/details/" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  {/* <Image
                    src="/img/services/mobile-app.png"
                    alt="Mobile App Development"
                    width={78}
                    height={70}
                  /> */}
                </div>
                <h3>
                  <Link href="/services/details/">Mobile App Development</Link>
                </h3>
                <p>
                  Build powerful, cross-platform mobile apps with Flutter, designed to deliver seamless experiences on both Android and iOS.
                </p>

                <Link href="/services/details/" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  {/* <Image
                    src="/img/services/software.png"
                    alt="Custom Software Solutions"
                    width={78}
                    height={70}
                  /> */}
                </div>
                <h3>
                  <Link href="/services/details/">Custom Software Solutions</Link>
                </h3>
                <p>
                  We design and develop tailored software solutions to meet your unique business needs, ensuring scalability, security, and efficiency.
                </p>

                <Link href="/services/details/" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  {/* <Image
                    src="/img/services/ecommerce.png"
                    alt="E-commerce Solutions"
                    width={78}
                    height={70}
                  /> */}
                </div>
                <h3>
                  <Link href="/services/details/">E-commerce Solutions</Link>
                </h3>
                <p>
                  Create feature-rich e-commerce platforms that drive sales and provide seamless shopping experiences for your customers.
                </p>

                <Link href="/services/details/" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  {/* <Image
                    src="/img/services/ux-ui.png"
                    alt="UX/UI Design"
                    width={78}
                    height={70}
                  /> */}
                </div>
                <h3>
                  <Link href="/services/details/">UX/UI Design</Link>
                </h3>
                <p>
                  We craft intuitive and visually stunning designs that enhance user engagement and deliver exceptional digital experiences.
                </p>

                <Link href="/services/details/" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  {/* <Image
                    src="/img/services/backend.png"
                    alt="Backend Development"
                    width={78}
                    height={70}
                  /> */}
                </div>
                <h3>
                  <Link href="/services/details/">Backend Development</Link>
                </h3>
                <p>
                  Our robust backend solutions, powered by Node JS and Laravel, ensure your applications are scalable, secure, and performant.
                </p>

                <Link href="/services/details/" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-shape2">
          <Image
            src="/img/shape/circle-shape2.png"
            alt="image"
            width={350}
            height={520}
          />
        </div>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};

export default ServicesStyleTwo;

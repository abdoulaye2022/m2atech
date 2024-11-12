"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurServices: React.FC = () => {
  return (
    <>
      <div className="services-area ptb-100 bg-f1f8fb">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <Image
                src="/img/star-icon.png"
                alt="image"
                width={32}
                height={34}
              />
              Our Services
            </span>
            <h2>We Offer Professional Solutions For Business</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon1.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>
                  <Link href="/services/details/">Data Analytics</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>

                <Link href="/services/details/" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon2.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>
                  <Link href="/services/details/">AI & ML Development</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>

                <Link href="/services/details/" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon3.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>
                  <Link href="/services/details/">Data Science</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>

                <Link href="/services/details/" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon4.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>
                  <Link href="/services/details/">Predictive Analytics</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>

                <Link href="/services/details/" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon5.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>
                  <Link href="/services/details/">Software Development</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>

                <Link href="/services/details/" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon6.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>
                  <Link href="/services/details/">Elastic Solutions</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>

                <Link href="/services/details/" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="load-more-btn text-center">
                <Link href="/services/2" className="default-btn">
                  <i className="flaticon-refresh"></i> Load More <span></span>
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

export default OurServices;

"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUsContent: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-img">
                <Image
                  src="/img/about/about-img10.png"
                  alt="image"
                  width={811}
                  height={620}
                />
                <div className="shape">
                  <Image
                    src="/img/about/about-shape1.png"
                    alt="image"
                    width={924}
                    height={875}
                  />
                </div>
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
                    />
                    About Us
                  </span>

                  <h2>Business Analytics For Data-Driven Solutions</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>

                  <ul className="about-list">
                    <li>
                      <i className="flaticon-tick"></i>
                      Big Data
                      <Image
                        src="/img/our-mission/our-mission-shape2.png"
                        alt="image"
                        width={55}
                        height={53}
                      />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Data Visualization
                      <Image
                        src="/img/our-mission/our-mission-shape2.png"
                        alt="image"
                        width={55}
                        height={53}
                      />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Data Warehousing
                      <Image
                        src="/img/our-mission/our-mission-shape2.png"
                        alt="image"
                        width={55}
                        height={53}
                      />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Data Management
                      <Image
                        src="/img/our-mission/our-mission-shape2.png"
                        alt="image"
                        width={55}
                        height={53}
                      />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Business Intelligence
                      <Image
                        src="/img/our-mission/our-mission-shape2.png"
                        alt="image"
                        width={55}
                        height={53}
                      />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Business Intelligence
                      <Image
                        src="/img/our-mission/our-mission-shape2.png"
                        alt="image"
                        width={55}
                        height={53}
                      />
                    </li>
                  </ul>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>

                  <Link href="/about-us/2/" className="default-btn">
                    <i className="flaticon-right"></i>
                    More About Us <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;

"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurMission: React.FC = () => {
  return (
    <>
      <div className="our-mission-area ptb-100">
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
                    Our Mission
                  </span>

                  <h2>Data Science & Data Analysis Agency</h2>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>

                  <ul className="our-mission-list">
                    <li>
                      <i className="flaticon-tick"></i>
                      Global Experience
                      <Image
                        src="/img/our-mission/our-mission-shape2.png"
                        alt="image"
                        width={55}
                        height={53}
                      />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Value for Results
                      <Image
                        src="/img/our-mission/our-mission-shape2.png"
                        alt="image"
                        width={55}
                        height={53}
                      />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      User Prespective
                      <Image
                        src="/img/our-mission/our-mission-shape2.png"
                        alt="image"
                        width={55}
                        height={53}
                      />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Business Prespective
                      <Image
                        src="/img/our-mission/our-mission-shape2.png"
                        alt="image"
                        width={55}
                        height={53}
                      />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Expert Prepective
                      <Image
                        src="/img/our-mission/our-mission-shape2.png"
                        alt="image"
                        width={55}
                        height={53}
                      />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Retail Solutions
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
                    Read More
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="our-mission-image">
                <Image
                  src="/img/our-mission/our-mission1.png"
                  alt="image"
                  width={778}
                  height={577}
                />
                <div className="shape">
                  <Image
                    src="/img/our-mission/our-mission-shape1.png"
                    alt="image"
                    width={919}
                    height={875}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;

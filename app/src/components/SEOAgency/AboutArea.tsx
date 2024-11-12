"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutArea: React.FC = () => {
  return (
    <>
      <div className="about-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src="/img/services/service3.png"
                  alt="image"
                  width={945}
                  height={660}
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
                    />
                    About Us
                  </span>
                  <h2>We Are Dynamic Team Of SEO Agency</h2>
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
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>

                  <Link href="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>
                    More About Us
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-shape1">
          <Image
            src="/img/shape/circle-shape1.png"
            alt="image"
            width={350}
            height={386}
          />
        </div>
      </div>
    </>
  );
};

export default AboutArea;

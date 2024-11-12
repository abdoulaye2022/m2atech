"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="seo-agency-banner">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="banner-wrapper-content">
                <span
                  className="sub-title"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  SEO Agency
                </span>

                <h1
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  Creative & Strategic Digital SEO Agency
                </h1>

                <p
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  We have created a cloud based tool to do your all boring tasks
                  related to data analysis and decesion making based on the
                  nature of data!
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  <Link href="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>
                    About Us
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div
                className="banner-wrapper-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <Image
                  src="/img/banner-img2.png"
                  alt="image"
                  width={750}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;

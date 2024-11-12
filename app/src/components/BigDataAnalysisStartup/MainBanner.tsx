"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="banner-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="banner-wrapper-content">
                <h1
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  Managed Analytics and Data Analysis Platform
                </h1>

                <p
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  We have created a cloud based tool to do your all boring tasks
                  related to data analysis and decesion making based on the
                  nature of data!
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <Link href="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>
                    About Us <span></span>
                  </Link>
                  <Link href="/profile-authentication" className="default-btn">
                    <i className="flaticon-tick"></i>
                    Get Started <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="banner-wrapper-animation-image">
                <Image
                  src="/img/main-banner/banner-four/banner-four-shape1.png"
                  alt="image"
                  width={43}
                  height={122}
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="50"
                />

                <Image
                  src="/img/main-banner/banner-four/banner-four-shape2.png"
                  alt="image"
                  width={370}
                  height={450}
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="100"
                />

                <Image
                  src="/img/main-banner/banner-four/banner-four-shape3.png"
                  alt="image"
                  width={355}
                  height={294}
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="150"
                />

                <Image
                  src="/img/main-banner/banner-four/banner-four-shape4.png"
                  alt="image"
                  width={119}
                  height={221}
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="200"
                />

                <Image
                  src="/img/main-banner/banner-four/banner-four-shape5.png"
                  alt="image"
                  width={411}
                  height={313}
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="250"
                />

                <Image
                  src="/img/main-banner/banner-four/banner-four-shape6.png"
                  alt="image"
                  width={84}
                  height={151}
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="300"
                />

                <Image
                  src="/img/main-banner/banner-four/banner-four-shape7.png"
                  alt="image"
                  width={367}
                  height={197}
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="350"
                />

                <Image
                  src="/img/main-banner/banner-four/banner-four-shape8.png"
                  alt="image"
                  width={273}
                  height={238}
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="400"
                />

                <Image
                  src="/img/main-banner/banner-four/banner-four-shape9.png"
                  alt="image"
                  width={755}
                  height={439}
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="450"
                />

                <Image
                  src="/img/main-banner/banner-four/banner-four-shape10.png"
                  alt="image"
                  width={1000}
                  height={557}
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="500"
                />

                <Image
                  src="/img/main-banner/banner-four/banner-four-main-img.png"
                  alt="image"
                  width={1019}
                  height={740}
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="550"
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

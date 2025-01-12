"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="it-services-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="main-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  Innovative Digital Solutions for Your Business
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  At M2ATech, we specialize in creating modern, user-friendly websites, powerful mobile apps, and custom software solutions tailored to your unique needs. Let’s transform your ideas into reality.
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <Link href="/contact" className="default-btn">
                    <i className="flaticon-right"></i>
                    Start Your Project <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="main-banner-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <Image
                  src="/img/banner-img1.png"
                alt="M2ATech Digital Solutions"
                width={750}
                height={626}
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

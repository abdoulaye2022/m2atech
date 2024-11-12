"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="main-banner-area">
        <div className="container">
          <div className="banner-area-content">
            <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              Big Data, AI & ML Consulting!
            </h1>

            <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              Get all kinds of hi-tech decesion making consulting services using
              Artificial Intelligence and Machine Learning from one umbrella.
            </p>

            <div
              className="banner-btn"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <Link href="/contact" className="default-btn">
                <i className="flaticon-web"></i>
                Work With Us <span></span>
              </Link>
            </div>

            <Image
              src="/img/main-banner/main-pic1.png"
              alt="image"
              width={893}
              height={727}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;

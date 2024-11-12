"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="hero-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="hero-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  Learn Data Science
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  Keeping your skills up to date is essential and learning Data
                  Science including oportunites on Big Data can drive you to
                  become extraordinary professionals.
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <Link href="/events" className="default-btn">
                    <i className="flaticon-right"></i>
                    Explore Bootcamps <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="hero-banner-animation-image">
                <Image
                  src="/img/main-banner/banner-three/banner-three-shape1.png"
                  alt="image"
                  width={94}
                  height={194}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="50"
                />

                <Image
                  src="/img/main-banner/banner-three/banner-three-shape2.png"
                  alt="image"
                  width={467}
                  height={384}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                />

                <Image
                  src="/img/main-banner/banner-three/banner-three-shape3.png"
                  alt="image"
                  width={164}
                  height={393}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="150"
                />

                <Image
                  src="/img/main-banner/banner-three/banner-three-shape4.png"
                  alt="image"
                  width={180}
                  height={179}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                />

                <Image
                  src="/img/main-banner/banner-three/banner-three-shape5.png"
                  alt="image"
                  width={472}
                  height={25350}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="250"
                />

                <Image
                  src="/img/main-banner/banner-three/banner-three-shape6.png"
                  alt="image"
                  width={226}
                  height={253}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                />

                <Image
                  src="/img/main-banner/banner-three/banner-three-shape7.png"
                  alt="image"
                  width={289}
                  height={148}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="350"
                />

                <Image
                  src="/img/main-banner/banner-three/banner-three-shape8.png"
                  alt="image"
                  width={264}
                  height={172}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                />

                <Image
                  src="/img/main-banner/banner-three/banner-three-shape9.png"
                  alt="image"
                  width={175}
                  height={174}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="450"
                />

                <Image
                  src="/img/main-banner/banner-three/banner-three-shape10.png"
                  alt="image"
                  width={174}
                  height={113}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                />

                <Image
                  src="/img/main-banner/banner-three/banner-three-main-img.png"
                  alt="image"
                  width={950}
                  height={610}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="550"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="vector-shape7">
          <Image
            src="/img/shape/vector-shape7.png"
            alt="image"
            width={955}
            height={359}
          />
        </div>

        <div className="vector-shape8">
          <Image
            src="/img/shape/vector-shape8.png"
            alt="image"
            width={536}
            height={506}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;

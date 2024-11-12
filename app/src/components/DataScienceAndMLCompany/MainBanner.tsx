"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

const MainBanner: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="main-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="main-banner-content">
                <h1
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  Data Science Consulting Services
                </h1>

                <p
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  Get professional & reliable research oriented solutions for
                  Data Science and Machine Learning business needs. Enjoy stress
                  free decesion making!
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <Link href="/about-us" className="default-btn">
                    <i className="flaticon-structure"></i>
                    About Us <span></span>
                  </Link>

                  <Link
                    href="#play-video"
                    onClick={() => setToggler(!toggler)}
                    className="video-btn popup-youtube"
                  >
                    <i className="flaticon-google-play"></i> Watch Video
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="main-banner-animation-image">
                <Image
                  src="/img/main-banner/banner-one/banner-one-shape1.png"
                  width={298}
                  height={369}
                  alt="image"
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="50"
                />

                <Image
                  src="/img/main-banner/banner-one/banner-one-shape2.png"
                  width={45}
                  height={215}
                  alt="image"
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="100"
                />

                <Image
                  src="/img/main-banner/banner-one/banner-one-shape3.png"
                  width={292}
                  height={394}
                  alt="image"
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="150"
                />

                <Image
                  src="/img/main-banner/banner-one/banner-one-shape4.png"
                  width={176}
                  height={342}
                  alt="image"
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="200"
                />

                <Image
                  src="/img/main-banner/banner-one/banner-one-shape5.png"
                  width={177}
                  height={220}
                  alt="image"
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="250"
                />

                <Image
                  src="/img/main-banner/banner-one/banner-one-shape6.png"
                  width={92}
                  height={213}
                  alt="image"
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="300"
                />

                <Image
                  src="/img/main-banner/banner-one/banner-one-shape7.png"
                  width={255}
                  height={277}
                  alt="image"
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="350"
                />

                <Image
                  src="/img/main-banner/banner-one/banner-one-shape8.png"
                  width={262}
                  height={298}
                  alt="image"
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="400"
                />

                <Image
                  src="/img/main-banner/banner-one/banner-one-shape9.png"
                  width={37}
                  height={306}
                  alt="image"
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="450"
                />

                <Image
                  src="/img/main-banner/banner-one/banner-one-shape10.png"
                  width={500}
                  height={274}
                  alt="image"
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="500"
                />

                <Image
                  src="/img/main-banner/banner-one/banner-one-shape11.png"
                  width={430}
                  height={250}
                  alt="image"
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="550"
                />

                <Image
                  src="/img/main-banner/banner-one/banner-one-shape12.png"
                  width={150}
                  height={87}
                  alt="image"
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="600"
                />

                <Image
                  src="/img/main-banner/banner-one/banner-one-main-img.png"
                  width={893}
                  height={727}
                  alt="image"
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

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

      <div className="banner-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  Data Analytics Consulting Services
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  World leading reliable research & AI based Data Analytics
                  solutions for Big Data companies and consumer business
                  products. Drive your success without stress!
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <Link href="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>
                    About Us <span></span>
                  </Link>

                  <Link
                    href="#play-video"
                    onClick={() => setToggler(!toggler)}
                    className="video-btn "
                  >
                    <i className="flaticon-google-play"></i> Watch Video
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="banner-animation-image">
                <Image
                  src="/img/main-banner/banner-two/banner-two-shape1.png"
                  alt="image"
                  width={107}
                  height={173}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="50"
                />

                <Image
                  src="/img/main-banner/banner-two/banner-two-shape2.png"
                  alt="image"
                  width={156}
                  height={134}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                />

                <Image
                  src="/img/main-banner/banner-two/banner-two-shape3.png"
                  alt="image"
                  width={40}
                  height={168}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="150"
                />

                <Image
                  src="/img/main-banner/banner-two/banner-two-shape4.png"
                  alt="image"
                  width={97}
                  height={154}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                />

                <Image
                  src="/img/main-banner/banner-two/banner-two-shape5.png"
                  alt="image"
                  width={311}
                  height={175}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="250"
                />

                <Image
                  src="/img/main-banner/banner-two/banner-two-shape6.png"
                  alt="image"
                  width={55}
                  height={186}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                />

                <Image
                  src="/img/main-banner/banner-two/banner-two-shape7.png"
                  alt="image"
                  width={208}
                  height={218}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="350"
                />

                <Image
                  src="/img/main-banner/banner-two/banner-two-shape8.png"
                  alt="image"
                  width={215}
                  height={236}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                />

                <Image
                  src="/img/main-banner/banner-two/banner-two-shape9.png"
                  alt="image"
                  width={134}
                  height={113}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="450"
                />

                <Image
                  src="/img/main-banner/banner-two/banner-two-shape10.png"
                  alt="image"
                  width={267}
                  height={292}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                />

                <Image
                  src="/img/main-banner/banner-two/banner-two-shape11.png"
                  alt="image"
                  width={200}
                  height={255}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="550"
                />

                <Image
                  src="/img/main-banner/banner-two/banner-two-shape12.png"
                  alt="image"
                  width={698}
                  height={407}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="600"
                />

                <Image
                  src="/img/main-banner/banner-two/banner-two-main-img.png"
                  alt="image"
                  width={967}
                  height={643}
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

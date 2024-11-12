"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

const MainBanner: React.FC = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <Swiper
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]}
        className="home-slides"
      >
        <SwiperSlide>
          <div
            className="main-banner-item"
            style={{
              backgroundImage: `url(/img/main-banner/main-banner1.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="banner-item-content">
                    <span className="sub-title">Welcome</span>
                    <h1>Modern Machine Learning Solutions!</h1>
                    <p>
                      We add values to our clients business by utilizing our
                      expertise and experience on AI based Machine Learning
                      Soltions. Our learning drives us to success!
                    </p>

                    <div className="btn-box">
                      <Link href="/about-us" className="default-btn">
                        <i className="flaticon-right"></i>
                        About Us <span></span>
                      </Link>

                      <Link
                        href="#play-video"
                        className="video-btn"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="flaticon-google-play"></i> Watch Video
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="main-banner-item"
            style={{
              backgroundImage: `url(/img/main-banner/main-banner2.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="banner-item-content">
                    <span className="sub-title">Welcome</span>
                    <h1>AI Based Modern Business Solutions</h1>
                    <p>
                      We think AI can bring the best results for clients
                      business needs. Our SMART decesion making AI algorithm can
                      identify the business needs and offers solutions.
                    </p>

                    <div className="btn-box">
                      <Link href="/about-us" className="default-btn">
                        <i className="flaticon-right"></i>
                        About Us <span></span>
                      </Link>

                      <Link
                        href="#play-video"
                        className="video-btn"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="flaticon-google-play"></i> Watch Video
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainBanner;

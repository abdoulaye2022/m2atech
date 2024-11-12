"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

const AboutUs: React.FC = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image-box">
                <Image
                  src="/img/about/about-img9.jpg"
                  alt="image"
                  width={650}
                  height={750}
                />

                <div className="box">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                  >
                    <i className="flaticon-google-play"></i> Watch Video
                  </div>
                </div>
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
                  <h2>Drive Digital Revolution Through Data Science</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>

                  <ul className="features-list">
                    <li>
                      <Image
                        src="/img/icons/icon4.png"
                        alt="image"
                        width={58}
                        height={52}
                      />
                      <h3>10 Years</h3>
                      <p>On the market</p>
                    </li>
                    <li>
                      <Image
                        src="/img/icons/icon5.png"
                        alt="image"
                        width={58}
                        height={52}
                      />
                      <h3>45+</h3>
                      <p>Team members</p>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>

                  <Link href="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>
                    More About Us <span></span>
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

export default AboutUs;

"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUsContent: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src="/img/about/about-img5.png"
                  alt="image"
                  width={944}
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
                    <li>
                      <Image
                        src="/img/icons/icon6.png"
                        alt="image"
                        width={58}
                        height={52}
                      />
                      <h3>100%</h3>
                      <p>Satisfaction rate</p>
                    </li>
                    <li>
                      <Image
                        src="/img/icons/icon7.png"
                        alt="image"
                        width={58}
                        height={52}
                      />
                      <h3>80%</h3>
                      <p>Senior scientist</p>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>

                  <Link href="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>More About Us<span></span>
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

        <div className="container">
          <div className="about-inner-area">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our History</h3>
                  <p>
                    Real innovations and a positive customer experience are the
                    heart of successful communication.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Activate Listening
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Brilliant minds
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Better. Best. Wow!
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Branding it better!
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our Mission</h3>
                  <p>
                    Real innovations and a positive customer experience are the
                    heart of successful communication.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Creating. Results.
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Expect more
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Good thinking
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> In real we trust
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Who we are</h3>
                  <p>
                    Real innovations and a positive customer experience are the
                    heart of successful communication.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Stay real. Always.
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> We have you covered
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> We turn heads
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Your brand, promoted
                    </li>
                  </ul>
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

export default AboutUsContent;

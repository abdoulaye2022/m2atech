"use client";
  
import React from "react";
import Image from "next/image";

const TeamMember: React.FC = () => {
  return (
    <>
      <div className="scientist-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <Image
                src="/img/star-icon.png"
                alt="image"
                width={32}
                height={34}
              />
              Team Members
            </span>
            <h2>Our Data Scientist</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <Image
                    src="/img/scientist/scientist12.jpg"
                    alt="image"
                    width={550}
                    height={550}
                  />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h3>Merv Adrian</h3>
                  <span>Data Management</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <Image
                    src="/img/scientist/scientist13.jpg"
                    alt="image"
                    width={550}
                    height={550}
                  />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h3>Kirk Borne</h3>
                  <span>Data Scientist</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <Image
                    src="/img/scientist/scientist14.jpg"
                    alt="image"
                    width={550}
                    height={550}
                  />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h3>Carla Gentry</h3>
                  <span>Analytical Solutions</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <Image
                    src="/img/scientist/scientist15.jpg"
                    alt="image"
                    width={550}
                    height={550}
                  />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h3>Marie Curie</h3>
                  <span>Data Scientist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;

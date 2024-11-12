"use client";
  
import React from "react";
import Image from "next/image";

const TeamMembers: React.FC = () => {
  return (
    <>
      <div className="scientist-area bg-color pt-100 pb-70">
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
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-scientist-box">
                <div className="image">
                  <Image
                    src="/img/scientist/scientist1.png"
                    alt="image"
                    width={250}
                    height={350}
                  />
                </div>
                <div className="content">
                  <h3>Merv Adrian</h3>
                  <span>Data Management</span>

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
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-scientist-box">
                <div className="image">
                  <Image
                    src="/img/scientist/scientist2.png"
                    alt="image"
                    width={250}
                    height={350}
                  />
                </div>
                <div className="content">
                  <h3>Kirk Borne</h3>
                  <span>Data Scientist</span>

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
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-scientist-box">
                <div className="image">
                  <Image
                    src="/img/scientist/scientist3.png"
                    alt="image"
                    width={250}
                    height={350}
                  />
                </div>
                <div className="content">
                  <h3>Carla Gentry</h3>
                  <span>Analytical Solutions</span>

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
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-scientist-box">
                <div className="image">
                  <Image
                    src="/img/scientist/scientist4.png"
                    alt="image"
                    width={250}
                    height={350}
                  />
                </div>
                <div className="content">
                  <h3>Marie Curie</h3>
                  <span>Data Scientist</span>

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMembers;

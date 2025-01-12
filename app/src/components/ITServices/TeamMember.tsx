"use client";

import React from "react";
import Image from "next/image";

const TeamMember: React.FC = () => {
  return (
    <>
      <div className="scientist-area pt-100 pb-70">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <span className="sub-title">
              <Image
                src="/img/star-icon.png"
                alt="image"
                width={32}
                height={34}
              />
              Team Members
            </span>
            <h2>Our Awesome Team</h2>
            <p>
              At M2ATech, our strength lies in our talented and passionate team. From developers to designers, our experts work together to deliver innovative web and software solutions tailored to your needs.
            </p>
          </div>

          <div className="row">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="single-scientist-item-box">
                <div className="image">
                  <Image
                    src="/img/team/team1.jpg"
                    alt="image"
                    width={580}
                    height={580}
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
                  <h3>Abdoulaye Mohamed</h3>
                  <span>CEO & Founder</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="single-scientist-item-box">
                <div className="image">
                  <Image
                    src="/img/team/team4.jpg"
                    alt="image"
                    width={580}
                    height={580}
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
                  <h3>Aboubacar Salou Moussa</h3>
                  <span>PDG</span>
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

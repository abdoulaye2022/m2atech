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
            <h2>Our Exceptional Team</h2>
            <p>
              At M2ATech, our strength lies in our passionate and talented team. Developers, designers, and
              tech experts collaborate to deliver innovative and tailor-made web and software solutions.
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
                <div className="content">
                  <h3>Abdoulaye Mohamed</h3>
                  <span>CEO & Founder</span>
                </div>
                <ul className="social" style={{ listStyle: "none", display: "flex", justifyContent: "center", marginTop: 10 }}>
                  <li style={{ margin: "0px 10px", }}>
                    <a
                      href="https://www.facebook.com/"
                      className="d-block"
                      target="_blank"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li style={{ margin: "0px 10px" }}>
                    <a
                      href="https://www.twitter.com/"
                      className="d-block"
                      target="_blank"
                    >
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li style={{ margin: "0px 10px" }}>
                    <a
                      href="https://www.instagram.com/"
                      className="d-block"
                      target="_blank"
                    >
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li style={{ margin: "0px 10px" }}>
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

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="single-scientist-item-box">
                <div className="content">
                  <h3>Aboubacar Salou Moussa</h3>
                  <span>PDG</span>
                </div>
                <ul className="social" style={{ listStyle: "none", display: "flex", justifyContent: "center", marginTop: 10 }}>
                  <li style={{ margin: "0px 10px", }}>
                    <a
                      href="https://www.facebook.com/"
                      className="d-block"
                      target="_blank"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li style={{ margin: "0px 10px" }}>
                    <a
                      href="https://www.twitter.com/"
                      className="d-block"
                      target="_blank"
                    >
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li style={{ margin: "0px 10px" }}>
                    <a
                      href="https://www.instagram.com/"
                      className="d-block"
                      target="_blank"
                    >
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li style={{ margin: "0px 10px" }}>
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
    </>
  );
};

export default TeamMember;

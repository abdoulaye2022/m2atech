"use client";
  
import React from "react";
import Image from "next/image";

const OurHistory: React.FC = () => {
  return (
    <div className="history-area ptb-100 bg-fafafb">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <Image
              src="/img/star-icon.png"
              alt="image"
              width={32}
              height={34}
            />
            Our History
          </span>
          <h2>History Begins in 2010</h2>
        </div>

        <ol className="timeline history-timeline">
          <li className="timeline-block">
            <div className="timeline-date">
              <span>2010</span>
              February 20
              <sup>th</sup>
            </div>

            <div className="timeline-icon">
              <span className="dot-badge"></span>
            </div>

            <div className="timeline-content">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="content">
                    <h3>Founded</h3>
                    <p>
                      Real innovations and a positive customer experience are
                      the heart of successful communication. Lorem ipsum dolor
                      sit amet, sectetur adipiscing elit, tempor incididunt ut
                      labore et dolore magna.
                    </p>
                  </div>
                </div>

                <div className="col-lg-5 col-md-12">
                  <div className="image">
                    <Image
                      src="/img/history/history1.jpg"
                      alt="image"
                      width={750}
                      height={650}
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="timeline-block">
            <div className="timeline-date">
              <span>2023</span>
              January 14
              <sup>th</sup>
            </div>

            <div className="timeline-icon">
              <span className="dot-badge"></span>
            </div>

            <div className="timeline-content">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="content">
                    <h3>Global Success</h3>
                    <p>
                      Real innovations and a positive customer experience are
                      the heart of successful communication. Lorem ipsum dolor
                      sit amet, sectetur adipiscing elit, tempor incididunt ut
                      labore et dolore magna.
                    </p>
                  </div>
                </div>

                <div className="col-lg-5 col-md-12">
                  <div className="image">
                    <Image
                      src="/img/history/history2.jpg"
                      alt="image"
                      width={750}
                      height={650}
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="timeline-block">
            <div className="timeline-date">
              <span>2016</span>
              March 25
              <sup>th</sup>
            </div>

            <div className="timeline-icon">
              <span className="dot-badge"></span>
            </div>

            <div className="timeline-content">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="content">
                    <h3>Founded Data Center</h3>
                    <p>
                      Real innovations and a positive customer experience are
                      the heart of successful communication. Lorem ipsum dolor
                      sit amet, sectetur adipiscing elit, tempor incididunt ut
                      labore et dolore magna.
                    </p>
                  </div>
                </div>

                <div className="col-lg-5 col-md-12">
                  <div className="image">
                    <Image
                      src="/img/history/history3.jpg"
                      alt="image"
                      width={750}
                      height={650}
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="timeline-block">
            <div className="timeline-date">
              <span>2023</span>
              December 10
              <sup>th</sup>
            </div>

            <div className="timeline-icon">
              <span className="dot-badge"></span>
            </div>

            <div className="timeline-content">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="content">
                    <h3>International Award</h3>
                    <p>
                      Real innovations and a positive customer experience are
                      the heart of successful communication. Lorem ipsum dolor
                      sit amet, sectetur adipiscing elit, tempor incididunt ut
                      labore et dolore magna.
                    </p>
                  </div>
                </div>

                <div className="col-lg-5 col-md-12">
                  <div className="image">
                    <Image
                      src="/img/history/history4.jpg"
                      alt="image"
                      width={750}
                      height={650}
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default OurHistory;

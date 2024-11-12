"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="about-area res-pt-0 pb-100 pt-70">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-img">
                <Image
                  src="/img/about/about-img8.png"
                  alt="image"
                  width={848}
                  height={490}
                />
                <div className="shape">
                  <Image
                    src="/img/about/about-shape1.png"
                    alt="image"
                    width={924}
                    height={875}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <h2>Data Science Training + Industry Experience</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <ul className="content-list">
                    <li>
                      <i className="flaticon-tick"></i> What is regularization
                      and why it is useful
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Perhaps the most popular
                      data science methodologies
                    </li>
                  </ul>
                  <p>
                    You will learn about training data, and how to use a set of
                    data to discover potentially predictive relationships. As
                    you build the movie recommendation system, you will learn
                    how to train algorithms using training data so you can
                    predict the outcome for future datasets. You will also learn
                    about overtraining and techniques to avoid it such as
                    cross-validation. All of these skills are fundamental to
                    machine learning.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>

                  <Link href="/about-us-4" className="default-btn">
                    <i className="flaticon-right"></i>
                    More About Us <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const StartProject: React.FC = () => {
  return (
    <>
      <div className="project-start-area bg-color ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="project-start-image">
                <Image
                  src="/img/project-start1.png"
                  alt="image"
                  width={600}
                  height={398}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="project-start-content">
                <h2>We Like to Start Your Project With Us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>

                <Link href="/contact" className="default-btn">
                  <i className="flaticon-web"></i>
                  Get Started
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="vector-shape9">
          <Image
            src="/img/shape/vector-shape9.png"
            alt="image"
            width={399}
            height={364}
          />
        </div>
        <div className="vector-shape10">
          <Image
            src="/img/shape/vector-shape10.png"
            alt="image"
            width={316}
            height={285}
          />
        </div>
      </div>
    </>
  );
};

export default StartProject;

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const StartProjectTwo: React.FC = () => {
  return (
    <>
      <div className="project-start-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="project-start-image">
                <Image
                  src="/img/project-start1.png" // Assurez-vous que le chemin de l'image est correct
                  alt="Innovative Technology Solutions"
                  width={600}
                  height={398}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="project-start-content">
                <h2>Let's Build the Future Together</h2>
                <p>
                  At MeaTech, we specialize in delivering cutting-edge technology solutions tailored to your business needs. Whether it's software development, AI integration, or cloud solutions, we're here to help you innovate and grow.
                </p>

                <Link href="/contact" className="default-btn">
                  <i className="flaticon-web"></i>
                  Start Your Project
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-shape1">
          <Image
            src="/img/shape/circle-shape1.png" // Assurez-vous que le chemin de l'image est correct
            alt="Decorative Circle Shape"
            width={350}
            height={386}
          />
        </div>
      </div>
    </>
  );
};

export default StartProjectTwo;
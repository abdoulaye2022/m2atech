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
                alt="Start Your Project with M2ATech"
                width={600}
                height={398}
          />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="project-start-content">
                <h2>Let’s Bring Your Vision to Life</h2>
                <p>
                  At M2ATech, we’re passionate about turning your ideas into reality. Whether you need a stunning website, a powerful mobile app, or custom software, our team is here to guide you every step of the way. Let’s build something amazing together!
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

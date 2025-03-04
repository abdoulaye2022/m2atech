"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectStartArea: React.FC = () => {
  return (
    <>
      <div className="project-start-area ptb-100">
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
                <h2>Transform Your Ideas into Reality with Us</h2>
                <p>
                At M2ATech, we're driven by the vision of turning your ideas into exceptional digital solutions. 
                Whether it’s a sleek website, a dynamic mobile app, or custom software, our team is ready to bring 
                your vision to life. Let's create something remarkable together! 
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

export default ProjectStartArea;

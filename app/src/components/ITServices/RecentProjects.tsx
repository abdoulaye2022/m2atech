"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const RecentProjects: React.FC = () => {
  return (
    <>
      <div className="projects-area bg-color pt-100 pb-70">
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
              />{" "}
              Recent Projects
            </span>
            <h2>See Our Recent Work</h2>
            <p>
              Here are a few of the **successful projects** we've delivered to clients just like you. Each project is a result of our dedication to creating websites and software that meet your specific needs.
            </p>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="single-projects-box">
                <div className="image">
                  <Image
                    src="/img/projects/mastabarber.jpeg"
                    alt="MastaBarber Website"
                    width={750}
                    height={600}
                  />

                  <Link href="https://www.mastabarber.com" className="link-btn" target="_blank">
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link href="https://www.mastabarber.com" target="_blank">
                      MastaBarber
                    </Link>
                  </h3>
                  <span>Barbershop Website</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="single-projects-box">
                <div className="image">
                  <Image
                    src="/img/projects/zaiqaeats.png"
                    alt="Kane Eco-Construction Website"
                    width={750}
                    height={600}
                  />

                  <Link href="https://www.zaiqaeats.com" className="link-btn" target="_blank">
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link href="https://www.zaiqaeats.com" target="_blank">
                      Zaiqaeats
                    </Link>
                  </h3>
                  <span>Indian Halal Restaurant Website</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="single-projects-box">
                <div className="image">
                  <Image
                    src="/img/projects/kane-eco.jpeg"
                    alt="Kane Eco-Construction Website"
                    width={750}
                    height={600}
                  />

                  <Link href="https://www.kane-eco-construction.com" className="link-btn" target="_blank">
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link href="https://www.kane-eco-construction.com" target="_blank">
                      Kane Eco-Construction
                    </Link>
                  </h3>
                  <span>Construction Company Website</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="single-projects-box">
                <div className="image">
                  <Image
                    src="/img/projects/kilo-share.png"
                    alt="Kilo-Share Website"
                    width={750}
                    height={600}
                  />

                  <Link href="https://www.kilo-share.com" className="link-btn" target="_blank">
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link href="https://www.kilo-share.com" target="_blank">
                      Kilo-Share
                    </Link>
                  </h3>
                  <span>Announcement Sharing Platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentProjects;

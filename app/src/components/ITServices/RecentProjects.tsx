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
            <h2>Check Some Of Our Recent Work</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
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
                    src="/img/projects/project1.jpg"
                    alt="image"
                    width={750}
                    height={600}
                  />

                  <Link href="/case-studies/details" className="link-btn">
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link href="/case-studies/details">
                      Movie Recommendation
                    </Link>
                  </h3>
                  <span>System Project</span>
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
                    src="/img/projects/project2.jpg"
                    alt="image"
                    width={750}
                    height={600}
                  />

                  <Link href="/case-studies/details" className="link-btn">
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link href="/case-studies/details">
                      Customer Segmentation
                    </Link>
                  </h3>
                  <span>Machine Learning</span>
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
                    src="/img/projects/project3.jpg"
                    alt="image"
                    width={750}
                    height={600}
                  />

                  <Link href="/case-studies/details" className="link-btn">
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link href="/case-studies/details">Data Analysis</Link>
                  </h3>
                  <span>Web Project</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="single-projects-box">
                <div className="image">
                  <Image
                    src="/img/projects/project4.jpg"
                    alt="image"
                    width={750}
                    height={600}
                  />

                  <Link href="/case-studies/details" className="link-btn">
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link href="/case-studies/details">Detection Project</Link>
                  </h3>
                  <span>Programming</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <div className="single-projects-box">
                <div className="image">
                  <Image
                    src="/img/projects/project5.jpg"
                    alt="image"
                    width={750}
                    height={600}
                  />

                  <Link href="/case-studies/details" className="link-btn">
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link href="/case-studies/details">Data Scientist</Link>
                  </h3>
                  <span>Data Science</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
              data-aos-once="true"
            >
              <div className="single-projects-box">
                <div className="image">
                  <Image
                    src="/img/projects/project6.jpg"
                    alt="image"
                    width={750}
                    height={600}
                  />

                  <Link href="/case-studies/details" className="link-btn">
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link href="/case-studies/details">Benefits Research</Link>
                  </h3>
                  <span>Science Projects</span>
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

"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const TwoColumns: React.FC = () => {
  return (
    <>
      <div className="projects-area pt-100 pb-70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6">
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

            <div className="col-lg-3 col-md-6">
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

            <div className="col-lg-3 col-md-6">
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

            <div className="col-lg-3 col-md-6">
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

            <div className="col-lg-3 col-md-6">
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

            <div className="col-lg-3 col-md-6">
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

            <div className="col-lg-3 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <Image
                    src="/img/projects/project7.jpg"
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
                    <Link href="/case-studies/details">Data Colletting</Link>
                  </h3>
                  <span>System Project</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
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
                    <Link href="/case-studies/details">AI & Data Science</Link>
                  </h3>
                  <span>Machine Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoColumns;

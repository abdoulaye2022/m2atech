"use client";
  
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "next/link";
import CoursesDetailsSidebar from "./CoursesDetailsSidebar";
import Image from "next/image";

const CourseDetailsContent: React.FC = () => {
  return (
    <>
      <div className="courses-details-area pb-100">
        <div className="courses-details-image">
          <Image
            src="/img/courses/courses-details.jpg"
            alt="image"
            width={1920}
            height={650}
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <Tabs className="courses-details-desc">
                <TabList>
                  <Tab>Overview</Tab>
                  <Tab>Curriculum</Tab>
                  <Tab>Instructor</Tab>
                  <Tab>Reviews</Tab>
                </TabList>

                <TabPanel>
                  <div className="courses-overview">
                    <h3>Course Description</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                    <h3>Certification</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                    <h3>Who this course is for</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="courses-curriculum">
                    <h3>Python Introduction</h3>
                    <ul>
                      <li>
                        <Link
                          href="#"
                          className="d-flex justify-content-between align-items-center"
                        >
                          <span className="courses-name">
                            Python Introduction
                          </span>
                          <div className="courses-meta">
                            <span className="questions">5 questions</span>
                            <span className="duration">01 Hour</span>
                            <span className="status">Preview</span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                    <h3>Stepping into the World of Python</h3>
                    <ul>
                      <li>
                        <Link
                          href="#"
                          className="d-flex justify-content-between align-items-center"
                        >
                          <span className="courses-name">
                            NumPy Introduction
                          </span>
                          <div className="courses-meta">
                            <span className="duration">15 Min</span>
                            <span className="status locked">
                              <i className="flaticon-lock"></i>
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="d-flex justify-content-between align-items-center"
                        >
                          <span className="courses-name">
                            NumPy Getting Started
                          </span>
                          <div className="courses-meta">
                            <span className="duration">30 Min</span>
                            <span className="status locked">
                              <i className="flaticon-lock"></i>
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="d-flex justify-content-between align-items-center"
                        >
                          <span className="courses-name">
                            NumPy Creating Arrays
                          </span>
                          <div className="courses-meta">
                            <span className="duration">45 Min</span>
                            <span className="status locked">
                              <i className="flaticon-lock"></i>
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="d-flex justify-content-between align-items-center"
                        >
                          <span className="courses-name">
                            NumPy Array Indexing
                          </span>
                          <div className="courses-meta">
                            <span className="questions">4 questions</span>
                            <span className="duration">1 Hour</span>
                            <span className="status locked">
                              <i className="flaticon-lock"></i>
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="d-flex justify-content-between align-items-center"
                        >
                          <span className="courses-name">
                            NumPy Array Slicing
                          </span>
                          <div className="courses-meta">
                            <span className="duration">1.5 Hour</span>
                            <span className="status locked">
                              <i className="flaticon-lock"></i>
                            </span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                    <h3>Python MySQL</h3>
                    <ul>
                      <li>
                        <Link
                          href="#"
                          className="d-flex justify-content-between align-items-center"
                        >
                          <span className="courses-name">Python MySQL</span>
                          <div className="courses-meta">
                            <span className="duration">01 Hour</span>
                            <span className="status locked">
                              <i className="flaticon-lock"></i>
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="d-flex justify-content-between align-items-center"
                        >
                          <span className="courses-name">
                            Python MySQL Create Database
                          </span>
                          <div className="courses-meta">
                            <span className="questions">3 questions</span>
                            <span className="duration">1.1 Hour</span>
                            <span className="status locked">
                              <i className="flaticon-lock"></i>
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="d-flex justify-content-between align-items-center"
                        >
                          <span className="courses-name">
                            Python MySQL Create Table
                          </span>
                          <div className="courses-meta">
                            <span className="duration">1.5 Hour</span>
                            <span className="status locked">
                              <i className="flaticon-lock"></i>
                            </span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="courses-instructor">
                    <div className="single-advisor-box">
                      <div className="row align-items-center">
                        <div className="col-lg-4 col-md-4">
                          <div className="advisor-image">
                            <Image
                              src="/img/speaker/speaker1.jpg"
                              alt="image"
                              width={590}
                              height={450}
                            />
                          </div>
                        </div>

                        <div className="col-lg-8 col-md-8">
                          <div className="advisor-content">
                            <h3>Sarah Taylor</h3>
                            <span className="sub-title">
                              Agile Project Expert
                            </span>
                            <ul className="social-link">
                              <li>
                                <a
                                  href="https://www.facebook.com/"
                                  className="d-block"
                                  target="_blank"
                                >
                                  <i className="bx bxl-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.twitter.com/"
                                  className="d-block"
                                  target="_blank"
                                >
                                  <i className="bx bxl-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.instagram.com/"
                                  className="d-block"
                                  target="_blank"
                                >
                                  <i className="bx bxl-instagram"></i>
                                </a>
                              </li>
                              <li>
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
                </TabPanel>

                <TabPanel>
                  <div className="courses-reviews">
                    <h3>Course Rating</h3>
                    <div className="rating">
                      <span className="bx bxs-star checked"></span>
                      <span className="bx bxs-star checked"></span>
                      <span className="bx bxs-star checked"></span>
                      <span className="bx bxs-star checked"></span>
                      <span className="bx bxs-star"></span>
                    </div>
                    <div className="rating-count">
                      <span>4.1 average based on 4 reviews.</span>
                    </div>
                    <div className="row">
                      <div className="side">
                        <div>5 star</div>
                      </div>
                      <div className="middle">
                        <div className="bar-container">
                          <div className="bar-5"></div>
                        </div>
                      </div>
                      <div className="side right">
                        <div>02</div>
                      </div>
                      <div className="side">
                        <div>4 star</div>
                      </div>
                      <div className="middle">
                        <div className="bar-container">
                          <div className="bar-4"></div>
                        </div>
                      </div>
                      <div className="side right">
                        <div>03</div>
                      </div>
                      <div className="side">
                        <div>3 star</div>
                      </div>
                      <div className="middle">
                        <div className="bar-container">
                          <div className="bar-3"></div>
                        </div>
                      </div>
                      <div className="side right">
                        <div>04</div>
                      </div>
                      <div className="side">
                        <div>2 star</div>
                      </div>
                      <div className="middle">
                        <div className="bar-container">
                          <div className="bar-2"></div>
                        </div>
                      </div>
                      <div className="side right">
                        <div>05</div>
                      </div>
                      <div className="side">
                        <div>1 star</div>
                      </div>
                      <div className="middle">
                        <div className="bar-container">
                          <div className="bar-1"></div>
                        </div>
                      </div>
                      <div className="side right">
                        <div>00</div>
                      </div>
                    </div>
                  </div>

                  <div className="courses-review-comments">
                    <h3>3 Reviews</h3>
                    <div className="user-review">
                      <Image
                        src="/img/user1.jpg"
                        alt="image"
                        width={300}
                        height={300}
                      />

                      <div className="review-rating">
                        <div className="review-stars">
                          <i className="bx bxs-star checked"></i>
                          <i className="bx bxs-star checked"></i>
                          <i className="bx bxs-star checked"></i>
                          <i className="bx bxs-star checked"></i>
                          <i className="bx bxs-star checked"></i>
                        </div>

                        <span className="d-inline-block">James Anderson</span>
                      </div>

                      <span className="d-block sub-comment">Excellent</span>
                      <p>
                        Very well built theme, couldn't be happier with it.
                        Can't wait for future updates to see what else they add
                        in.
                      </p>
                    </div>

                    <div className="user-review">
                      <Image
                        src="/img/user2.jpg"
                        alt="image"
                        width={300}
                        height={300}
                      />

                      <div className="review-rating">
                        <div className="review-stars">
                          <i className="bx bxs-star checked"></i>
                          <i className="bx bxs-star checked"></i>
                          <i className="bx bxs-star checked"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                        </div>

                        <span className="d-inline-block">Sarah Taylor</span>
                      </div>

                      <span className="d-block sub-comment">
                        Video Quality!
                      </span>
                      <p>
                        Was really easy to implement and they quickly answer my
                        additional questions!
                      </p>
                    </div>

                    <div className="user-review">
                      <Image
                        src="/img/user3.jpg"
                        alt="image"
                        width={300}
                        height={300}
                      />

                      <div className="review-rating">
                        <div className="review-stars">
                          <i className="bx bxs-star checked"></i>
                          <i className="bx bxs-star checked"></i>
                          <i className="bx bxs-star checked"></i>
                          <i className="bx bxs-star checked"></i>
                          <i className="bx bxs-star checked"></i>
                        </div>

                        <span className="d-inline-block">David Warner</span>
                      </div>

                      <span className="d-block sub-comment">
                        Perfect Coding!
                      </span>
                      <p>
                        Stunning design, very dedicated crew who welcome new
                        ideas suggested by customers, nice support.
                      </p>
                    </div>

                    <div className="user-review">
                      <Image
                        src="/img/user4.jpg"
                        alt="image"
                        width={300}
                        height={300}
                      />

                      <div className="review-rating">
                        <div className="review-stars">
                          <i className="bx bxs-star checked"></i>
                          <i className="bx bxs-star checked"></i>
                          <i className="bx bxs-star checked"></i>
                          <i className="bx bxs-star checked"></i>
                          <i className="bx bxs-star"></i>
                        </div>

                        <span className="d-inline-block">King Kong</span>
                      </div>

                      <span className="d-block sub-comment">
                        Perfect Video!
                      </span>
                      <p>
                        Stunning design, very dedicated crew who welcome new
                        ideas suggested by customers, nice support.
                      </p>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </div>

            <div className="col-lg-4 col-md-12">
              <CoursesDetailsSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetailsContent;

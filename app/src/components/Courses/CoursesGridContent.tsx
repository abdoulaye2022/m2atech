"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const CoursesGridContent: React.FC = () => {
  return (
    <>
      <div className="courses-area ptb-100 bg-fafafb">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link href="/courses/details/" className="d-block image">
                    <Image
                      src="/img/courses/course1.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>

                  {/* Before favorite */}
                  <button type="button" className="fav">
                    <i className='bx bx-heart'></i>
                  </button>
                  {/* After favorite */}
                  {/* <button type="button" className="fav favorited">
                    <i class='bx bxs-heart' ></i>
                  </button> */}

                  <div className="price shadow free">Free</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <Image
                      src="/img/user1.jpg"
                      className="rounded-circle"
                      alt="image"
                      width={300}
                      height={300}
                    />
                    <span>Alex Morgan</span>
                  </div>
                  <h3>
                    <Link href="/courses/details/">
                      Introduction to Quantitative Methods
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agendas"></i> 8 Weeks Long
                    </li>
                    <li>
                      <i className="flaticon-team"></i> Available Now
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box ">
                <div className="courses-image">
                  <Link href="/courses/details/" className="d-block image">
                    <Image
                      src="/img/courses/course2.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>

                  {/* Before favorite */}
                  <button type="button" className="fav">
                    <i className='bx bx-heart'></i>
                  </button>
                  {/* After favorite */}
                  {/* <button type="button" className="fav favorited">
                    <i class='bx bxs-heart' ></i>
                  </button> */}

                  <div className="price shadow">$49</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <Image
                      src="/img/user2.jpg"
                      className="rounded-circle"
                      alt="image"
                      width={300}
                      height={300}
                    />
                    <span>Sarah Taylor</span>
                  </div>
                  <h3>
                    <Link href="/courses/details/">
                      Introduction to Linear Models and Matrix Algebra
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agendas"></i> 7 Weeks Long
                    </li>
                    <li>
                      <i className="flaticon-team"></i> Available Now
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link href="/courses/details/" className="d-block image">
                    <Image
                      src="/img/courses/course3.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>

                  {/* Before favorite */}
                  <button type="button" className="fav">
                    <i className='bx bx-heart'></i>
                  </button>
                  {/* After favorite */}
                  {/* <button type="button" className="fav favorited">
                    <i class='bx bxs-heart' ></i>
                  </button> */}

                  <div className="price shadow">$69</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <Image
                      src="/img/user3.jpg"
                      className="rounded-circle"
                      alt="image"
                      width={300}
                      height={300}
                    />
                    <span>David Warner</span>
                  </div>
                  <h3>
                    <Link href="/courses/details/">
                      Data Science: Inference and Modeling
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agendas"></i> 2 Weeks Long
                    </li>
                    <li>
                      <i className="flaticon-team"></i> Available Now
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link href="/courses/details/" className="d-block image">
                    <Image
                      src="/img/courses/course4.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>

                  {/* Before favorite */}
                  <button type="button" className="fav">
                    <i className='bx bx-heart'></i>
                  </button>
                  {/* After favorite */}
                  {/* <button type="button" className="fav favorited">
                    <i class='bx bxs-heart' ></i>
                  </button> */}

                  <div className="price shadow">$39</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <Image
                      src="/img/user4.jpg"
                      className="rounded-circle"
                      alt="image"
                      width={300}
                      height={300}
                    />
                    <span>Alex Morgan</span>
                  </div>
                  <h3>
                    <Link href="/courses/details/">
                      The Data Science Course: Complete Data Science
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agendas"></i> 3 Weeks Long
                    </li>
                    <li>
                      <i className="flaticon-team"></i> Available Now
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link href="/courses/details/" className="d-block image">
                    <Image
                      src="/img/courses/course5.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>

                  {/* Before favorite */}
                  <button type="button" className="fav">
                    <i className='bx bx-heart'></i>
                  </button>
                  {/* After favorite */}
                  {/* <button type="button" className="fav favorited">
                    <i class='bx bxs-heart' ></i>
                  </button> */}

                  <div className="price shadow">$65</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <Image
                      src="/img/user5.jpg"
                      className="rounded-circle"
                      alt="image"
                      width={300}
                      height={300}
                    />
                    <span>David Warner</span>
                  </div>
                  <h3>
                    <Link href="/courses/details/">
                      Java Programming Masterclass for Developers
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agendas"></i> 3 Weeks Long
                    </li>
                    <li>
                      <i className="flaticon-team"></i> Available Now
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link href="/courses/details/" className="d-block image">
                    <Image
                      src="/img/courses/course6.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>

                  {/* Before favorite */}
                  <button type="button" className="fav">
                    <i className='bx bx-heart'></i>
                  </button>
                  {/* After favorite */}
                  {/* <button type="button" className="fav favorited">
                    <i class='bx bxs-heart' ></i>
                  </button> */}

                  <div className="price shadow">$69</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <Image
                      src="/img/user6.jpg"
                      className="rounded-circle"
                      alt="image"
                      width={300}
                      height={300}
                    />
                    <span>David Warner</span>
                  </div>
                  <h3>
                    <Link href="/courses/details/">
                      Machine Learning A-Z™: Hands-On Python
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agendas"></i> 2 Weeks Long
                    </li>
                    <li>
                      <i className="flaticon-team"></i> Available Now
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12 col-md-12">
              <div className="pagination-area text-center">
                <Link href="#" className="prev page-numbers">
                  <i className="bx bx-chevrons-left"></i>
                </Link>
                <span className="page-numbers current">1</span>

                <Link href="#" className="page-numbers">
                  2
                </Link>

                <Link href="#" className="page-numbers">
                  3
                </Link>

                <Link href="#" className="page-numbers">
                  4
                </Link>

                <Link href="#" className="next page-numbers">
                  <i className="bx bx-chevrons-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="vector-shape6">
          <Image src="/img/shape/vector-shape6.png" alt="image" width={533} height={413} />
        </div>
      </div>
    </>
  );
};

export default CoursesGridContent;

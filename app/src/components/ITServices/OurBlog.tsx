"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurBlog: React.FC = () => {
  return (
    <>
      <div className="blog-area pt-100 pb-70 bg-fffbf5">
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
              />
              Our Blog
            </span>
            <h2>Latest Valuable Insights</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/blog/details">
                    <Image
                      src="/img/blog/blog-img1.jpg"
                      alt="image"
                      width={700}
                      height={600}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex justify-content-between align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <Image
                          src="/img/user1.jpg"
                          className="rounded-circle"
                          alt="image"
                          width={300}
                          height={300}
                        />
                        <span>Alex Morgan</span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> April 30, 2023
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/details">
                      Six Ways to Make Smarter Decisions
                    </Link>
                  </h3>
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
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/blog/details">
                    <Image
                      src="/img/blog/blog-img5.jpg"
                      alt="image"
                      width={750}
                      height={650}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex justify-content-between align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <Image
                          src="/img/user2.jpg"
                          className="rounded-circle"
                          alt="image"
                          width={300}
                          height={300}
                        />
                        <span>Sarah Taylor</span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> April 28, 2023
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/details">
                      The Challenges to Tackle Before You Start With AI
                    </Link>
                  </h3>
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
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/blog/details">
                    <Image
                      src="/img/blog/blog-img6.jpg"
                      alt="image"
                      width={750}
                      height={650}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex justify-content-between align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <Image
                          src="/img/user3.jpg"
                          className="rounded-circle"
                          alt="image"
                          width={300}
                          height={300}
                        />
                        <span>David Warner</span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> April 29, 2023
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/details">
                      Why Organisations Want an Analytics Platform
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurBlog;

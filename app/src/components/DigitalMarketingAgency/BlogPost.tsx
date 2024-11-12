"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogPost: React.FC = () => {
  return (
    <>
      <div className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Latest Valuable Insights</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post bg-fffbf5">
                <div className="post-image">
                  <Link href="/blog/details">
                    <Image
                      src="/img/blog/blog-img4.jpg"
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

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post bg-fffbf5">
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

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post bg-fffbf5">
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

        <div className="vector-shape1">
          <Image
            src="/img/shape/vector-shape1.png"
            alt="image"
            width={594}
            height={580}
          />
        </div>
        <div className="vector-shape2">
          <Image
            src="/img/shape/vector-shape2.png"
            alt="image"
            width={594}
            height={580}
          />
        </div>
      </div>
    </>
  );
};

export default BlogPost;

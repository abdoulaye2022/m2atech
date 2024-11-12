"use client";
  
import React from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import Image from "next/image";

const BlogWithSidebar: React.FC = () => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-12 col-md-6">
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
                          <i className="flaticon-calendar"></i> April 5, 2023
                        </li>
                      </ul>
                      <h3>
                        <Link href="/blog/details">
                          The Data Surrounding Higher Education
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
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
                          <i className="flaticon-calendar"></i> April 6, 2023
                        </li>
                      </ul>
                      <h3>
                        <Link href="/blog/details">
                          Conversion Rate the Sales Funnel Optimization
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
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
                          <i className="flaticon-calendar"></i> April7, 2023
                        </li>
                      </ul>
                      <h3>
                        <Link href="/blog/details">
                          Business Data is changing the world’s Energy
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  {/* Pagination */}
                  <div className="pagination-area text-center">
                    <Link href="#" className="prev page-numbers">
                      <i className="bx bx-chevrons-left"></i>
                    </Link>
                    <span className="page-numbers current" aria-current="page">
                      1
                    </span>
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

            <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogWithSidebar;

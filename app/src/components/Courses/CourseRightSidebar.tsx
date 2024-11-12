"use client";
  
import React from "react";
import Link from "next/link";

const CourseRightSidebar: React.FC = () => {
  return (
    <>
      <aside className="widget-area">
        <section className="widget widget_search">
          <h3 className="widget-title">Search</h3>

          <form className="search-form">
            <label>
              <span className="screen-reader-text">Search for:</span>
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>
            <button type="submit">
              <i className="bx bx-search-alt"></i>
            </button>
          </form>
        </section>

        <section className="widget widget_recent_courses">
          <h3 className="widget-title">Recent Courses</h3>

          <article className="item">
            <Link href="/case-studies/details" className="thumb">
              <span
                className="fullimage cover"
                role="img" 
                style={{ backgroundImage: `url(/img/courses/course1.jpg)` }}
              ></span>
            </Link>
            <div className="info">
              <span>$49.00</span>
              <h4 className="title usmall">
                <Link href="/case-studies/details">
                  The Data Science Course 2023: Complete Data Science Bootcamp
                </Link>
              </h4>
            </div>
            <div className="clear"></div>
          </article>

          <article className="item">
            <Link href="/case-studies/details" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{ backgroundImage: `url(/img/courses/course2.jpg)` }}
              ></span>
            </Link>
            <div className="info">
              <span>$59.00</span>
              <h4 className="title usmall">
                <Link href="/case-studies/details">
                  Java Programming MasterclassName for Software Developers
                </Link>
              </h4>
            </div>
            <div className="clear"></div>
          </article>

          <article className="item">
            <Link href="/case-studies/details" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{ backgroundImage: `url(/img/courses/course3.jpg)` }}
              ></span>
            </Link>
            <div className="info">
              <span>$69.00</span>
              <h4 className="title usmall">
                <Link href="/case-studies/details">
                  Deep Learning A-Z™: Hands-On Artificial Neural Networks
                </Link>
              </h4>
            </div>
            <div className="clear"></div>
          </article>
        </section>

        <section className="widget widget_tag_cloud">
          <h3 className="widget-title">Popular Tags</h3>

          <div className="tagcloud">
            <Link href="/case-studies">
              Business <span className="tag-link-count">(3)</span>
            </Link>
            <Link href="/case-studies">
              Design <span className="tag-link-count">(3)</span>
            </Link>
            <Link href="/case-studies">
              Digital <span className="tag-link-count">(2)</span>
            </Link>
            <Link href="/case-studies">
              SEO <span className="tag-link-count">(2)</span>
            </Link>
            <Link href="/case-studies">
              Braike <span className="tag-link-count">(2)</span>
            </Link>
            <Link href="/case-studies">
              Fashion <span className="tag-link-count">(2)</span>
            </Link>
            <Link href="/case-studies">
              Software <span className="tag-link-count">(2)</span>
            </Link>
            <Link href="/case-studies">
              Travel <span className="tag-link-count">(1)</span>
            </Link>
            <Link href="/case-studies">
              Smart <span className="tag-link-count">(1)</span>
            </Link>
            <Link href="/case-studies">
              Marketing <span className="tag-link-count">(1)</span>
            </Link>
            <Link href="/case-studies">
              Tips <span className="tag-link-count">(2)</span>
            </Link>
            <Link href="/case-studies">
              Website <span className="tag-link-count">(2)</span>
            </Link>
          </div>
        </section>
      </aside>
    </>
  );
};

export default CourseRightSidebar;

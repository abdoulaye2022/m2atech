"use client";
  
import React from "react";
import Link from "next/link";

const BlogSidebar: React.FC = () => {
  return (
    <>
      <div className="widget-area">
        <div className="widget widget_search">
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
        </div>

        <div className="widget widget_tracer_posts_thumb">
          <h3 className="widget-title">Popular Posts</h3>

          <article className="item">
            <Link href="/blog/details" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{ backgroundImage: `url(/img/blog/blog-img9.jpg)` }}
              ></span>
            </Link>
            <div className="info">
              <span>June 10, 2023</span>
              <h4 className="title usmall">
                <Link href="/blog/details">
                  The Data Surrounding Higher Education
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link href="/blog/details" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{ backgroundImage: `url(/img/blog/blog-img10.jpg)` }}
              ></span>
            </Link>
            <div className="info">
              <span>June 21, 2023</span>
              <h4 className="title usmall">
                <Link href="/blog/details">
                  Conversion Rate the Sales Funnel Optimization
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link href="/blog/details" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{ backgroundImage: `url(/img/blog/blog-img11.jpg)` }}
              ></span>
            </Link>
            <div className="info">
              <span>June 30, 2023</span>
              <h4 className="title usmall">
                <Link href="/blog/details">
                  Business Data is changing the world’s Energy
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>
        </div>

        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            <li>
              <Link href="/blog">
                Design <span className="post-count">(03)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Lifestyle <span className="post-count">(05)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Script <span className="post-count">(10)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Device <span className="post-count">(08)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Tips <span className="post-count">(01)</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Popular Tags</h3>

          <div className="tagcloud">
            <Link href="/blog">
              Business <span className="tag-link-count">(3)</span>
            </Link>
            <Link href="/blog">
              Design <span className="tag-link-count">(3)</span>
            </Link>
            <Link href="/blog">
              Braike <span className="tag-link-count">(2)</span>
            </Link>
            <Link href="/blog">
              Fashion <span className="tag-link-count">(2)</span>
            </Link>
            <Link href="/blog">
              Travel <span className="tag-link-count">(1)</span>
            </Link>
            <Link href="/blog">
              Smart <span className="tag-link-count">(1)</span>
            </Link>
            <Link href="/blog">
              Marketing <span className="tag-link-count">(1)</span>
            </Link>
            <Link href="/blog">
              Tips <span className="tag-link-count">(2)</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;

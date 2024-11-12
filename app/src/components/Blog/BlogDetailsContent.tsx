"use client";
  
import React from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import Image from "next/image";

const BlogDetailsContent: React.FC = () => {
  return (
    <>
      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <Image
                    src="/img/blog/blog-img6.jpg"
                    alt="image"
                    width={750}
                    height={650}
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <i className="bx bx-folder-open"></i>
                        <span>Category</span>
                        <Link href="#">Fashion</Link>
                      </li>
                      <li>
                        <i className="bx bx-group"></i>
                        <span>View</span>
                        <Link href="#">813,454</Link>
                      </li>
                      <li>
                        <i className="bx bx-calendar"></i>
                        <span>Last Updated</span>
                        25/04/2023
                      </li>
                    </ul>
                  </div>

                  <h3>It’s Time To Think Differently About Homeschooling</h3>

                  <p>
                    Quuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam dolor sit amet,
                    consectetur adipisicing.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>

                  <blockquote>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <cite>Tom Cruise</cite>
                  </blockquote>

                  <p>
                    Quuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam dolor sit amet,
                    consectetur adipisicing.
                  </p>

                  <ul className="wp-block-gallery columns-3">
                    <li className="blocks-gallery-item">
                      <figure>
                        <Image
                          src="/img/blog/blog-img4.jpg"
                          alt="image"
                          width={750}
                          height={650}
                        />
                      </figure>
                    </li>

                    <li className="blocks-gallery-item">
                      <figure>
                        <Image
                          src="/img/blog/blog-img5.jpg"
                          alt="image"
                          width={750}
                          height={650}
                        />
                      </figure>
                    </li>

                    <li className="blocks-gallery-item">
                      <figure>
                        <Image
                          src="/img/blog/blog-img7.jpg"
                          alt="image"
                          width={750}
                          height={650}
                        />
                      </figure>
                    </li>
                  </ul>

                  <h3>Four major elements that we offer:</h3>

                  <ul className="features-list">
                    <li>
                      <i className="bx bx-badge-check"></i> Scientific skills
                      for getting a better result
                    </li>
                    <li>
                      <i className="bx bx-badge-check"></i> Communication skills
                      to getting in touch
                    </li>
                    <li>
                      <i className="bx bx-badge-check"></i> A career overview
                      opportunity available
                    </li>
                    <li>
                      <i className="bx bx-badge-check"></i> A good work
                      environment for work
                    </li>
                  </ul>

                  <h3>Setting the mood with incense</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>

                  <h3>The rise of marketing and why you need it</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud.
                  </p>
                </div>

                <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="bx bx-purchase-tag"></i>
                    </span>

                    <Link href="#">Fashion</Link>
                    <Link href="#">Games</Link>
                    <Link href="#">Travel</Link>
                  </div>

                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <span>Share:</span>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          className="facebook"
                          target="_blank"
                        >
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.twitter.com/"
                          className="twitter"
                          target="_blank"
                        >
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/"
                          className="linkedin"
                          target="_blank"
                        >
                          <i className="bx bxl-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/"
                          className="instagram"
                          target="_blank"
                        >
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="article-author">
                  <div className="author-profile-header"></div>
                  <div className="author-profile">
                    <div className="author-profile-title">
                      <Image
                        src="/img/user1.jpg"
                        className="shadow-sm"
                        alt="image"
                        width={300}
                        height={300}
                      />
                      <h4>Chris Orwig</h4>
                      <span className="d-block">
                        Photographer, Author, Writer
                      </span>
                      <p>
                        Chris Orwig is a celebrated photographer, author, and
                        writer who brings passion to everything he does. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit sed do
                        eiusmod tempor.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="tracer-post-navigation">
                  <div className="prev-link-wrapper">
                    <div className="info-prev-link-wrapper">
                      <Link href="#">
                        <span className="image-prev">
                          <Image src="/img/blog/blog-img11.jpg" alt="image" width={750} height="650" />
                          <span className="post-nav-title">Prev</span>
                        </span>

                        <span className="prev-link-info-wrapper">
                          <span className="prev-title">
                            What Is The MLB Summer Slugger Program?
                          </span>
                          <span className="meta-wrapper">
                            <span className="date-post">January 21, 2023</span>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="next-link-wrapper">
                    <div className="info-next-link-wrapper">
                      <Link href="#">
                        <span className="next-link-info-wrapper">
                          <span className="next-title">
                            28 Student-Centered Instructional Strategies
                          </span>
                          <span className="meta-wrapper">
                            <span className="date-post">January 19, 2023</span>
                          </span>
                        </span>

                        <span className="image-next">
                          <Image src="/img/blog/blog-img12.jpg" alt="image" width={750} height="650" />
                          <span className="post-nav-title">Next</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="comments-area">
                  <h3 className="comments-title">2 Comments:</h3>

                  <ol className="comment-list">
                    <li className="comment">
                      <div className="comment-body">
                        <div className="comment-meta">
                          <div className="comment-author vcard">
                            <Image
                              src="/img/user1.jpg"
                              className="avatar"
                              alt="image"
                              width={300}
                              height={300}
                            />
                            <b className="fn">John Jones</b>
                            <span className="says">says:</span>
                          </div>

                          <div className="comment-metadata">
                            <span>April 24, 2019 at 10:59 am</span>
                          </div>
                        </div>

                        <div className="comment-content">
                          <p>
                            Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen.
                          </p>
                        </div>

                        <div className="reply">
                          <Link href="#" className="comment-reply-link">
                            Reply
                          </Link>
                        </div>
                      </div>

                      <ol className="children">
                        <li className="comment">
                          <div className="comment-body">
                            <div className="comment-meta">
                              <div className="comment-author vcard">
                                <Image
                                  src="/img/user2.jpg"
                                  className="avatar"
                                  alt="image"
                                  width={300}
                                  height={300}
                                />
                                <b className="fn">Steven Smith</b>
                                <span className="says">says:</span>
                              </div>

                              <div className="comment-metadata">
                                April 24, 2019 at 10:59 am
                              </div>
                            </div>

                            <div className="comment-content">
                              <p>
                                Lorem Ipsum has been the industry’s standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen.
                              </p>
                            </div>

                            <div className="reply">
                              <Link href="#" className="comment-reply-link">
                                Reply
                              </Link>
                            </div>
                          </div>

                          <ol className="children">
                            <li className="comment">
                              <div className="comment-body">
                                <div className="comment-meta">
                                  <div className="comment-author vcard">
                                    <Image
                                      src="/img/user3.jpg"
                                      className="avatar"
                                      alt="image"
                                      width={300}
                                      height={300}
                                    />
                                    <b className="fn">Sarah Taylor</b>
                                    <span className="says">says:</span>
                                  </div>

                                  <div className="comment-metadata">
                                    April 24, 2019 at 10:59 am
                                  </div>
                                </div>

                                <div className="comment-content">
                                  <p>
                                    Lorem Ipsum has been the industry’s standard
                                    dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and
                                    scrambled it to make a type specimen.
                                  </p>
                                </div>

                                <div className="reply">
                                  <Link href="#" className="comment-reply-link">
                                    Reply
                                  </Link>
                                </div>
                              </div>
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </li>

                    <li className="comment">
                      <div className="comment-body">
                        <div className="comment-meta">
                          <div className="comment-author vcard">
                            <Image
                              src="/img/user4.jpg"
                              className="avatar"
                              alt="image"
                              width={300}
                              height={300}
                            />
                            <b className="fn">John Doe</b>
                            <span className="says">says:</span>
                          </div>

                          <div className="comment-metadata">
                            April 24, 2019 at 10:59 am
                          </div>
                        </div>

                        <div className="comment-content">
                          <p>
                            Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen.
                          </p>
                        </div>

                        <div className="reply">
                          <Link href="#" className="comment-reply-link">
                            Reply
                          </Link>
                        </div>
                      </div>

                      <ol className="children">
                        <li className="comment">
                          <div className="comment-body">
                            <div className="comment-meta">
                              <div className="comment-author vcard">
                                <Image
                                  src="/img/user1.jpg"
                                  className="avatar"
                                  alt="image"
                                  width={300}
                                  height={300}
                                />
                                <b className="fn">James Anderson</b>
                                <span className="says">says:</span>
                              </div>

                              <div className="comment-metadata">
                                April 24, 2019 at 10:59 am
                              </div>
                            </div>

                            <div className="comment-content">
                              <p>
                                Lorem Ipsum has been the industry’s standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen.
                              </p>
                            </div>

                            <div className="reply">
                              <Link href="#" className="comment-reply-link">
                                Reply
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>
                  </ol>

                  <div className="comment-respond">
                    <h3 className="comment-reply-title">Leave a Reply</h3>

                    <form className="comment-form">
                      <p className="comment-notes">
                        <span id="email-notes">
                          Your email address will not be published.
                        </span>
                        Required fields are marked
                        <span className="required">*</span>
                      </p>

                      <p className="comment-form-author">
                        <label>
                          Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="author"
                          placeholder="Your Name*"
                          name="author"
                          required
                        />
                      </p>

                      <p className="comment-form-email">
                        <label>
                          Email <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Your Email*"
                          name="email"
                          required
                        />
                      </p>

                      <p className="comment-form-url">
                        <label>Website</label>
                        <input
                          type="url"
                          id="url"
                          placeholder="Website"
                          name="url"
                        />
                      </p>

                      <p className="comment-form-comment">
                        <label>Comment</label>
                        <textarea
                          name="comment"
                          id="comment"
                          cols={45}
                          placeholder="Your Comment..."
                          rows={5}
                          required
                        ></textarea>
                      </p>

                      <p className="comment-form-cookies-consent">
                        <input
                          type="checkbox"
                          value="yes"
                          name="comment-cookies-consent"
                          id="comment-cookies-consent"
                        />
                        <label>
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </p>

                      <p className="form-submit">
                        <input
                          type="submit"
                          name="submit"
                          id="submit"
                          className="submit"
                          value="Post A Comment"
                        />
                      </p>
                    </form>
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

export default BlogDetailsContent;

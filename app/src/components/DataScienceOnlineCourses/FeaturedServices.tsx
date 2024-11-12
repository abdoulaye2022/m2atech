"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const FeaturedServices: React.FC = () => {
  return (
    <>
      <div className="featured-services-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-featured-services-item">
                <div className="icon">
                  <Image
                    src="/img/icons/icon1.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>
                  <Link href="/services/details/">Online</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link href="/services/details/" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>

                <div className="shape">
                  <Image
                    src="/img/services/service-shape3.png"
                    alt="image"
                    width={380}
                    height={144}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-featured-services-item">
                <div className="icon">
                  <Image
                    src="/img/icons/icon2.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>

                <h3>
                  <Link href="/services/details/">In-person</Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link href="/services/details/" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>

                <div className="shape">
                  <Image
                    src="/img/services/service-shape3.png"
                    alt="image"
                    width={380}
                    height={144}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-featured-services-item">
                <div className="icon">
                  <Image
                    src="/img/icons/icon3.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>

                <h3>
                  <Link href="/services/details/">Business</Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link href="/services/details/" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>

                <div className="shape">
                  <Image
                    src="/img/services/service-shape3.png"
                    alt="image"
                    width={380}
                    height={144}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedServices;

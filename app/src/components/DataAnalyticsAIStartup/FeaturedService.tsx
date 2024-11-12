"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const FeaturedService: React.FC = () => {
  return (
    <>
      <div className="boxes-area pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-item">
                <div className="icon">
                  <Image
                    src="/img/icons/icon1.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>
                  <Link href="/services/details/2">Marketing Analytics</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link href="/services/details/2" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>

                <div className="shape1">
                  <Image
                    src="/img/services/service-shape2.png"
                    alt="image"
                    width={127}
                    height={119}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-item">
                <div className="icon">
                  <Image
                    src="/img/icons/icon2.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>
                  <Link href="/services/details/2">Consumer Analytics</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link href="/services/details/2" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>
                <div className="shape1">
                  <Image
                    src="/img/services/service-shape2.png"
                    alt="image"
                    width={127}
                    height={119}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-item">
                <div className="icon">
                  <Image
                    src="/img/icons/icon3.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>
                  <Link href="/services/details/2">Sales Analytics</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link href="/services/details/2" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>

                <div className="shape1">
                  <Image
                    src="/img/services/service-shape2.png"
                    alt="image"
                    width={127}
                    height={119}
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

export default FeaturedService;

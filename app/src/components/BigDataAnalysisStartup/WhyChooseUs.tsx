"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="why-choose-us-area bg-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-content">
                <h2>Why Choose Us?</h2>
                <p>
                  During 30 years in data analytics, we have built up
                  comprehensive competencies that cover traditional and big
                  data, data management, business intelligence (including
                  self-service BI and data visualization), advanced data
                  analytics, and data science.
                </p>
                <p>
                  In 2015, we were rated A+ by BBB, recognized as the top IT
                  company by Clutch, as well as featured on The Silicon Review
                  listing among 10 Fastest Growing Data Analytics Companies.
                </p>

                <Link href="/about-us" className="default-btn">
                  <i className="flaticon-right"></i>
                  More About Us <span></span>
                </Link>

                <div className="map-shape2">
                  <Image
                    src="/img/shape/map-shape2.png"
                    alt="image"
                    width={623}
                    height={463}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="our-brand-partners-list">
                <h2>Our Brand Partners</h2>

                <div className="row align-items-center">
                  <div className="col-lg-6 col-sm-6 col-md-4">
                    <Image
                      src="/img/partner/partner1.png"
                      alt="image"
                      width={130}
                      height={40}
                    />
                  </div>

                  <div className="col-lg-6 col-sm-6 col-md-4">
                    <Image
                      src="/img/partner/partner2.png"
                      alt="image"
                      width={130}
                      height={40}
                    />
                  </div>

                  <div className="col-lg-6 col-sm-6 col-md-4">
                    <Image
                      src="/img/partner/partner3.png"
                      alt="image"
                      width={130}
                      height={40}
                    />
                  </div>

                  <div className="col-lg-6 col-sm-6 col-md-4">
                    <Image
                      src="/img/partner/partner4.png"
                      alt="image"
                      width={130}
                      height={40}
                    />
                  </div>

                  <div className="col-lg-6 col-sm-6 col-md-4">
                    <Image
                      src="/img/partner/partner5.png"
                      alt="image"
                      width={130}
                      height={40}
                    />
                  </div>

                  <div className="col-lg-6 col-sm-6 col-md-4">
                    <Image
                      src="/img/partner/partner6.png"
                      alt="image"
                      width={130}
                      height={40}
                    />
                  </div>
                </div>

                <Link href="/partner" className="view-all">
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;

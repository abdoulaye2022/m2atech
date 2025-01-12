"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurSolutions: React.FC = () => {
  return (
    <>
      <div className="solutions-area pb-70">
        <div className="container">
          <div 
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <span className="sub-title">
              <Image src="/img/star-icon.png" alt="image" width={32} height={34} />
              Our Solutions
            </span>
            <h2>We Different From Others Should Choose Us</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p> */}
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-rocket"></i>
                </div>
                <h3>
                  <Link href="/services/details/">Tailored Solutions & Innovation</Link>
                </h3>
                <p>
                At M2ATech, we don’t just build websites and software—we create custom solutions designed to fit your unique needs. With a focus on i
                nnovation and user-friendly design, we deliver tools that help you stand out. Choose M2ATech for a partner that turns your vision into reality.
                </p>

                <Link href="/services/details/" className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>

                <h3>
                  <Link href="/services/details/">Your Success, Our Priority</Link>
                </h3>

                <p>
                What sets us apart is our commitment to your success. From start to finish, we work closely with you to ensure your project 
                meets its goals. With personalized support, on-time delivery, and transparent communication, M2ATech is the partner you can trust.
                </p>

                <Link href="/services/details/" className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-money"></i>
                </div>

                <h3>
                  <Link href="/services/details/">Client-Centric Approach</Link>
                </h3>

                <p>
                M2ATech stands out by putting your needs first. We take the time to understand your challenges and goals, crafting websites and 
                software that combine functionality, design, and performance. Choose M2ATech for a partner focused on your growth.
                </p>

                <Link href="/services/details/" className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSolutions;

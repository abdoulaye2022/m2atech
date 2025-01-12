"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="testimonials-area pt-100 bg-f1f8fb">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              
              Testimonials
            </span>
            <h2>What Our Clients Are Saying</h2>
            <p>
              Hear from our satisfied clients about their experiences working with M2ATech. We take pride in delivering exceptional results and building lasting relationships.
            </p>
          </div>

          <Swiper
            navigation={true}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="testimonials-slides"
          >
            <SwiperSlide>
              <div className="single-testimonials-item">
                <p>
                  "Working with M2ATech was an incredible experience. They transformed my vision for MastaBarber into a stunning, user-friendly website that has significantly boosted my business. Their team is professional, responsive, and truly cares about their clients' success."
                </p>

                <div className="client-info">
                  <div className="d-flex justify-content-center align-items-center">
                    
                    <div className="title">
                      <h3>Djibril Mahaman</h3>
                      <span>Owner of MastaBarber</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <p>
                  "M2ATech delivered an outstanding website for Kane Eco-Construction. They understood our needs perfectly and created a modern, professional platform that reflects our brand. Their attention to detail and commitment to quality are unmatched."
                </p>

                <div className="client-info">
                  <div className="d-flex justify-content-center align-items-center">
                   
                    <div className="title">
                      <h3>Abdou Abdou</h3>
                      <span>CEO of Kane Eco-Construction</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* <div className="testimonials-view-btn text-center">
            <Link href="/testimonials" className="default-btn">
              <i className="flaticon-view"></i>
              Check Out All Reviews <span></span>
            </Link>
          </div> */}
        </div>

        <div className="shape-img1">
          <Image
            src="/img/shape/shape1.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
      </div>
    </>
  );
};

export default Testimonials;

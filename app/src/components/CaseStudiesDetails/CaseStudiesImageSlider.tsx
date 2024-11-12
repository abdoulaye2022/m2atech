"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const CaseStudiesImageSlider: React.FC = () => {
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]}
        className="services-details-image-slides mb-5"
      >
        <SwiperSlide>
          <div className="single-item">
            <Image
              src="/img/projects/projects-details1.jpg"
              alt="image"
              className="w-100"
              width={750}
              height={450}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="single-item">
            <Image
              src="/img/projects/projects-details2.jpg"
              alt="image"
              className="w-100"
              width={750}
              height={450}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CaseStudiesImageSlider;

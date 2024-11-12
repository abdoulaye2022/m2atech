"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="testimonials-area bg-23173a pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>What Our Clients are Saying?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
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
              <div className="single-testimonials-box">
                <Image
                  src="/img/user1.jpg"
                  className="shadow-sm"
                  alt="image"
                  width={300}
                  height={300}
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <div className="client-info">
                  <div className="title">
                    <h3>Alex Maxwell</h3>
                    <span>CEO at EnvyTheme</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-box">
                <Image
                  src="/img/user2.jpg"
                  className="shadow-sm"
                  alt="image"
                  width={300}
                  height={300}
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <div className="client-info">
                  <div className="title">
                    <h3>David Warner</h3>
                    <span>CEO at Envato</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-box">
                <Image
                  src="/img/user3.jpg"
                  className="shadow-sm"
                  alt="image"
                  width={300}
                  height={300}
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <div className="client-info">
                  <div className="title">
                    <h3>Sarah Taylor</h3>
                    <span>CEO at ThemeForest</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="vector-shape9">
          <Image
            src="/img/shape/vector-shape9.png"
            alt="image"
            width={399}
            height={364}
          />
        </div>
        <div className="vector-shape10">
          <Image
            src="/img/shape/vector-shape10.png"
            alt="image"
            width={316}
            height={285}
          />
        </div>
      </div>
    </>
  );
};

export default Testimonials;

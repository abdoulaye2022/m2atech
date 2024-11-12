"use client";
  
import React from "react";
import Image from "next/image";

const TestimonialsStyleTwo: React.FC = () => {
  return (
    <>
      <div className="testimonials-area pt-100 pb-70 bg-fafafb">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <Image
                src="/img/star-icon.png"
                alt="image"
                width={32}
                height={34}
              />
              Testimonials
            </span>
            <h2>What Our Clients are Saying?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-testimonials-box">
                <Image
                  src="/img/testimonials/client1.jpg"
                  className="shadow-sm"
                  alt="image"
                  width={50}
                  height={50}
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div className="client-info">
                  <h3>Alex Maxwell</h3>
                  <span>CEO at EnvyTheme</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-testimonials-box">
                <Image
                  src="/img/testimonials/client2.jpg"
                  className="shadow-sm"
                  alt="image"
                  width={50}
                  height={50}
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div className="client-info">
                  <h3>David Warner</h3>
                  <span>CEO at Envato</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-testimonials-box">
                <Image
                  src="/img/testimonials/client3.jpg"
                  className="shadow-sm"
                  alt="image"
                  width={50}
                  height={50}
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div className="client-info">
                  <h3>Sarah Taylor</h3>
                  <span>CEO at ThemeForest</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-testimonials-box">
                <Image
                  src="/img/testimonials/client1.jpg"
                  className="shadow-sm"
                  alt="image"
                  width={50}
                  height={50}
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div className="client-info">
                  <h3>Alex Maxwell</h3>
                  <span>CEO at EnvyTheme</span>
                </div>
              </div>
            </div>
          </div>
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

export default TestimonialsStyleTwo;

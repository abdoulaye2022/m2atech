"use client";
  
import React from "react";
import Image from "next/image";

const Funfacts: React.FC = () => {
  return (
    <>
      <div className="funfacts-area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-6 col-md-3">
              <div className="single-funfacts-box">
                <div className="icon">
                  <Image
                    src="/img/funfacts/fun-icon1.png"
                    alt="image"
                    width={58}
                    height={52}
                  />
                </div>
                <h3>10 Years</h3>
                <p>On the market</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-6 col-md-3">
              <div className="single-funfacts-box">
                <div className="icon">
                  <Image
                    src="/img/funfacts/fun-icon2.png"
                    alt="image"
                    width={58}
                    height={52}
                  />
                </div>
                <h3>45+</h3>
                <p>Team members</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-6 col-md-3">
              <div className="single-funfacts-box">
                <div className="icon">
                  <Image
                    src="/img/funfacts/fun-icon3.png"
                    alt="image"
                    width={58}
                    height={52}
                  />
                </div>
                <h3>100%</h3>
                <p>Satisfaction rate</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-6 col-md-3">
              <div className="single-funfacts-box">
                <div className="icon">
                  <Image
                    src="/img/funfacts/fun-icon4.png"
                    alt="image"
                    width={58}
                    height={52}
                  />
                </div>
                <h3>80%</h3>
                <p>Senior scientist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funfacts;

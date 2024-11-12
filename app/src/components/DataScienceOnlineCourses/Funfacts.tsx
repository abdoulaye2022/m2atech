"use client";
  
import React from "react";
import Image from "next/image";

const Funfacts: React.FC = () => {
  return (
    <>
      <div className="funfacts-area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-3 col-6 col-md-3">
              <div className="single-funfacts-item">
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

            <div className="col-lg-3 col-sm-3 col-6 col-md-3">
              <div className="single-funfacts-item">
                <div className="icon">
                  <Image
                    src="/img/funfacts/fun-icon2.png"
                    alt="image"
                    width={58}
                    height={52}
                  />
                </div>
                <h3>10,000+</h3>
                <p>Learners</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-3 col-6 col-md-3">
              <div className="single-funfacts-item">
                <div className="icon">
                  <Image
                    src="/img/funfacts/fun-icon3.png"
                    alt="image"
                    width={58}
                    height={52}
                  />
                </div>
                <h3>125+</h3>
                <p>Course</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-3 col-6 col-md-3">
              <div className="single-funfacts-item">
                <div className="icon">
                  <Image
                    src="/img/funfacts/fun-icon4.png"
                    alt="image"
                    width={58}
                    height={52}
                  />
                </div>
                <h3>196+</h3>
                <p>Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funfacts;

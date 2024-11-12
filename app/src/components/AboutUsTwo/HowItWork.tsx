"use client";
  
import React from "react";
import Image from "next/image";

const HowItWork: React.FC = () => {
  return (
    <>
      <div className="process-area ptb-100 bg-fafafb">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <Image
                src="/img/star-icon.png"
                alt="image"
                width={32}
                height={34}
              />
              How It's Work
            </span>
            <h2>Our Data Analytics Process</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row align-items-center m-0">
            <div className="col-lg-6 col-md-12 p-0">
              <div className="process-image">
                <Image
                  src="/img/process/process7.png"
                  alt="image"
                  width={575}
                  height={610}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12 p-0">
              <div className="process-content">
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="single-box-item">
                      <div className="d-flex align-items-center">
                        <div className="image">
                          <Image
                            src="/img/process/process-small1.png"
                            alt="image"
                            width={80}
                            height={60}
                          />
                        </div>
                        <h3>Frame the Problem</h3>
                        <div className="number">1</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="single-box-item">
                      <div className="d-flex align-items-center">
                        <div className="image">
                          <Image
                            src="/img/process/process-small1.png"
                            alt="image"
                            width={80}
                            height={60}
                          />
                        </div>
                        <h3>Collect the Raw Data</h3>
                        <div className="number">2</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="single-box-item">
                      <div className="d-flex align-items-center">
                        <div className="image">
                          <Image
                            src="/img/process/process-small1.png"
                            alt="image"
                            width={80}
                            height={60}
                          />
                        </div>
                        <h3>Process the Data</h3>
                        <div className="number">3</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="single-box-item">
                      <div className="d-flex align-items-center">
                        <div className="image">
                          <Image
                            src="/img/process/process-small4.png"
                            alt="image"
                            width={74}
                            height={80}
                          />
                        </div>
                        <h3>Explore the Data</h3>
                        <div className="number">4</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="single-box-item">
                      <div className="d-flex align-items-center">
                        <div className="image">
                          <Image
                            src="/img/process/process-small5.png"
                            alt="image"
                            width={88}
                            height={60}
                          />
                        </div>
                        <h3>Perform Analysis</h3>
                        <div className="number">5</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="single-box-item">
                      <div className="d-flex align-items-center">
                        <div className="image">
                          <Image
                            src="/img/process/process-small6.png"
                            alt="image"
                            width={83}
                            height={60}
                          />
                        </div>
                        <h3>Communicate Results</h3>
                        <div className="number">6</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWork;

"use client";
  
import React from "react";
import Image from "next/image";

const HowItWork: React.FC = () => {
  return (
    <div className="process-area pb-70">
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
          <h2>The Data Science Process</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-process-box">
              <div className="number">1</div>
              <div className="image">
                <Image
                  src="/img/process/process1.png"
                  alt="image"
                  width={222}
                  height={196}
                />
              </div>
              <h3>Frame the Problem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-process-box">
              <div className="number">2</div>
              <div className="image">
                <Image
                  src="/img/process/process2.png"
                  alt="image"
                  width={222}
                  height={196}
                />
              </div>
              <h3>Collect the Raw Data</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-process-box">
              <div className="number">3</div>
              <div className="image">
                <Image
                  src="/img/process/process3.png"
                  alt="image"
                  width={222}
                  height={196}
                />
              </div>
              <h3>Process the Data</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-process-box ">
              <div className="number">4</div>
              <div className="image">
                <Image
                  src="/img/process/process4.png"
                  alt="image"
                  width={222}
                  height={196}
                />
              </div>
              <h3>Explore the Data</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-process-box">
              <div className="number">5</div>
              <div className="image">
                <Image
                  src="/img/process/process5.png"
                  alt="image"
                  width={222}
                  height={196}
                />
              </div>
              <h3>Perform In-depth Analysis</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-process-box">
              <div className="number">6</div>
              <div className="image">
                <Image
                  src="/img/process/process6.png"
                  alt="image"
                  width={222}
                  height={196}
                />
              </div>
              <h3>Communicate Results</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="circle-shape1">
        <Image
          src="/img/shape/circle-shape1.png"
          alt="image"
          width={350}
          height={386}
        />
      </div>
    </div>
  );
};

export default HowItWork;

"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServicesStyleThree: React.FC = () => {
  return (
    <>
      <div className="process-area pt-100 pb-70">
        <div className="container">
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
                <h3>
                  <Link href="/services/details/">Frame the Problem</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
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
                <h3>
                  <Link href="/services/details/">Collect the Raw Data</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
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
                <h3>
                  <Link href="/services/details/">Process the Data</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
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
                <h3>
                  <Link href="/services/details/">Explore the Data</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
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
                <h3>
                  <Link href="/services/details/">Perform In-depth Analysis</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
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
                <h3>
                  <Link href="/services/details/">Communicate Results</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
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
    </>
  );
};

export default ServicesStyleThree;

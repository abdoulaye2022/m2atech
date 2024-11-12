"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const WeServe: React.FC = () => {
  return (
    <>
      <div className="industries-serve-area bg-fafafb pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Industries We Serve</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="flaticon-factory"></i>
                </div>
                Manufacturing
                <Link href="/services/details/" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="flaticon-hospital"></i>
                </div>
                Healthcare
                <Link href="/services/details/" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="flaticon-tracking"></i>
                </div>
                Automobile
                <Link href="/services/details/" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="flaticon-investment"></i>
                </div>
                Banking
                <Link href="/services/details/" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="flaticon-house"></i>
                </div>
                Real Estate
                <Link href="/services/details/" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="flaticon-order"></i>
                </div>
                Logistics
                <Link href="/services/details/" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="flaticon-family-insurance"></i>
                </div>
                Insurance
                <Link href="/services/details/" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="flaticon-bitcoin"></i>
                </div>
                Capital Markets
                <Link href="/services/details/" className="link-btn"></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="vector-shape11">
          <Image
            src="/img/shape/vector-shape11.png"
            alt="image"
            width={742}
            height={429}
          />
        </div>
      </div>
    </>
  );
};

export default WeServe;

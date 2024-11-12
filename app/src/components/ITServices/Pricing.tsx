"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Pricing: React.FC = () => {
  return (
    <>
      <div className="membership-levels-area ptb-100">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <span className="sub-title">
              <Image
                src="/img/star-icon.png"
                alt="image"
                width={32}
                height={34}
              />
              Pricing
            </span>
            <h2>Pricing Plans</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div
            className="membership-levels-table table-responsive"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <table className="table table-striped">
              <thead>
                <tr>
                  <th></th>
                  <th>
                    <span className="price">$15.00</span>
                    <span className="title">Basic Plan</span>
                    <span className="desc">/Monthly</span>
                  </th>
                  <th>
                    <span className="price">$35.00</span>
                    <span className="title">Advanced Plan</span>
                    <span className="desc">/Monthly</span>
                  </th>
                  <th>
                    <span className="price">$65.00</span>
                    <span className="title">Expert Plan</span>
                    <span className="desc">/Monthly</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Number of features</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">5 GB Bandwidth</Link>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">Highest Speed</Link>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">1 GB Storage</Link>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">Unlimited Website</Link>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">Unlimited Users</Link>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">24x7 Great Support</Link>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">Data Security and Backups</Link>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">Monthly Reports and Analytics</Link>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <Link href="#" className="select-btn">
                      Get it now
                    </Link>
                  </td>
                  <td>
                    <Link href="#" className="select-btn">
                      Get it now
                    </Link>
                  </td>
                  <td>
                    <Link href="#" className="select-btn">
                      Get it now
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;

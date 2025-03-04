"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area bg-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="single-footer-widget">
                <Link href="/" className="logo">
                  <Image
                    src="/img/m2atech.png"
                    alt="M2ATech Logo"
                    width={130}
                    height={54}
                  />
                </Link>
                <p>
                At M2ATech, we specialize in creating modern, user-friendly websites, powerful mobile apps, and custom software 
                solutions tailored to your unique needs. Let’s transform your ideas into reality.
                </p>
                <ul className="social-link">
                  <li>
                    <a
                      className="d-block"
                      target="_blank"
                      href="https://www.facebook.com/"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a
                      className="d-block"
                      target="_blank"
                      href="https://www.twitter.com/"
                    >
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li> */}
                  <li>
                    <a
                      className="d-block"
                      target="_blank"
                      href="https://www.instagram.com/m2atech.solutions/"
                    >
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-block"
                      target="_blank"
                      href="https://www.linkedin.com/company/m2atech-solutions-inc"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6">
              <div className="single-footer-widget pl-5">
                <h3>Explore</h3>

                <ul className="footer-links-list">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="footer-contact-info">
                  <li>
                    <i className="bx bx-map"></i>
                    203-74 Belmont Street, Moncton,<br /> NB E1C 8W4, Canada
                  </li>
                  <li>
                    <i className="bx bx-phone-call"></i>
                    <a href="tel:+44587154756">+1 (506) 850 6548</a>
                  </li>
                  <li>
                    <i className="bx bx-envelope"></i>
                    <a href="mailto:contacts@m2atech.com">contact@m2atech.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>
                  Copyright &copy;{currentYear} <strong>M2atech</strong> All rights
                  reserved{" "}
                  {/* <a target="_blank" href="https://envytheme.com/">
                    EnvyTheme
                  </a> */}
                </p>
              </div>

              <div className="col-lg-6 col-md-6">
                <ul>
                  {/* <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service">Terms & Conditions</Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-map">
          <Image
            src="/img/footer-map.png"
            alt="image"
            width={693}
            height={362}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;

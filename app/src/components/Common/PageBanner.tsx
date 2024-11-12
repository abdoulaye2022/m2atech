"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface PageBannerProps {
  pageTitle: string;
  homePageUrl: string;
  homePageText: string;
  activePageText: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
}) => {
  return (
    <>
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>{pageTitle}</h2>
            <ul>
              <li>
                <Link href={homePageUrl}>{homePageText}</Link>
              </li>
              <li>{activePageText}</li>
            </ul>
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
        <div className="shape-img2">
          <Image
            src="/img/shape/shape2.png"
            alt="image"
            width={202}
            height={202}
          />
        </div>
        <div className="shape-img3">
          <Image
            src="/img/shape/shape3.png"
            alt="image"
            width={182}
            height={146}
          />
        </div>
      </div>
    </>
  );
};

export default PageBanner;

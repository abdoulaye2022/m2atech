"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

const ExploreLearning: React.FC = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="explore-learning-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="explore-learning-content">
                <h2>Build Your Data Science Analytics Skills Online</h2>
                <p>
                  Want to learn and earn PDUs or CEUs on your schedule —
                  anytime, anywhere? Or, pick up a new skill quickly like,
                  project team leadership or agile? Browse our most popular
                  online courses.
                </p>
                <Link href="#" className="explore-learing-btn">
                  Explore Learing
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="explore-learning-video">
                <Image
                  src="/img/explore-learning.jpg"
                  alt="image"
                  width={630}
                  height={394}
                />

                <div onClick={() => setToggler(!toggler)} className="video-btn">
                  <i className="flaticon-google-play"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreLearning;

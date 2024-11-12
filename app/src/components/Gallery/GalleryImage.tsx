"use client";

import React from "react";
import Image from "next/image";

const images = [
  "/img/gallery/gallery1.jpg",
  "/img/gallery/gallery2.jpg",
  "/img/gallery/gallery3.jpg",
  "/img/gallery/gallery4.jpg",
  "/img/gallery/gallery5.jpg",
  "/img/gallery/gallery6.jpg",
  "/img/gallery/gallery7.jpg",
  "/img/gallery/gallery8.jpg",
  "/img/gallery/gallery9.jpg",
];

const GalleryImage: React.FC = () => {
  return (
    <>
      <div className="gallery-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            {images.map((image, index) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div className="single-gallery-item">
                  <Image src={image} alt="image" width={750} height={500} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryImage;

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const TeamMembers: React.FC = () => {
  return (
    <>
      <div className="scientist-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="scientist-box-list">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-md-6 offset-lg-1">
                    <div className="single-scientist-item">
                      <Image
                        src="/img/scientist/scientist9.jpg" // Mettez à jour le chemin de l'image
                        alt="M2ATech Team Member"
                        width={285}
                        height={285}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6 col-md-6">
                    <div className="single-scientist-item">
                      <Image
                        src="/img/scientist/scientist10.jpg" // Mettez à jour le chemin de l'image
                        alt="M2ATech Team Member"
                        width={285}
                        height={285}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-12 col-md-6 offset-lg-0 offset-md-3">
                    <div className="single-scientist-item">
                      <Image
                        src="/img/scientist/scientist11.jpg" // Mettez à jour le chemin de l'image
                        alt="M2ATech Team Member"
                        width={285}
                        height={285}
                      />
                    </div>
                  </div>
                </div>

                <div className="map-shape1">
                  <Image
                    src="/img/shape/map-shape1.png" // Vérifiez le chemin de l'image
                    alt="Decorative Map Shape"
                    width={359}
                    height={266}
                  />
                </div>
                <div className="vector-shape5">
                  <Image
                    src="/img/shape/vector-shape5.png" // Vérifiez le chemin de l'image
                    alt="Decorative Vector Shape"
                    width={397}
                    height={390}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div className="scientist-section-title">
                <span className="sub-title">
                  <Image
                    src="/img/star-icon.png" // Vérifiez le chemin de l'image
                    alt="Star Icon"
                    width={32}
                    height={34}
                  />
                  Our Experts
                </span>
                <h2>
                  Meet Our Team of Innovators Driving Your Success
                </h2>
                <p>
                  At M2ATech, our team of skilled professionals is dedicated to delivering cutting-edge solutions tailored to your business needs. From software development to AI integration, we bring expertise and innovation to every project.
                </p>
                <p>
                  Our collaborative approach ensures that we understand your goals and deliver results that exceed expectations. Let us help you transform your ideas into reality.
                </p>

                <Link href="/team" className="default-btn">
                  <i className="flaticon-view"></i>
                  Meet Our Team <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="vector-shape4">
          <Image
            src="/img/shape/vector-shape4.png" // Vérifiez le chemin de l'image
            alt="Decorative Vector Shape"
            width={535}
            height={435}
          />
        </div>
      </div>
    </>
  );
};

export default TeamMembers;
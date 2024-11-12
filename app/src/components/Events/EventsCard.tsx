"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const EventsCard: React.FC = () => {
  return (
    <>
      <div className="events-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-events-box">
                <div className="image">
                  <Link href="/events/details" className="d-block">
                    <Image
                      src="/img/events/event1.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>
                  <span className="date">Wed, 20 May, 2023</span>
                </div>

                <div className="content">
                  <h3>
                    <Link href="/events/details">
                      Global Conference on Business Management
                    </Link>
                  </h3>
                  <span className="location">
                    <i className="bx bx-map"></i> Vancover, Canada
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-events-box">
                <div className="image">
                  <Link href="/events/details" className="d-block">
                    <Image
                      src="/img/events/event2.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>
                  <span className="date">Tue, 19 May, 2023</span>
                </div>

                <div className="content">
                  <h3>
                    <Link href="/events/details">
                      International Conference on Teacher Education
                    </Link>
                  </h3>
                  <span className="location">
                    <i className="bx bx-map"></i> Sydney, Australia
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-events-box">
                <div className="image">
                  <Link href="/events/details" className="d-block">
                    <Image
                      src="/img/events/event3.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>
                  <span className="date">Mon, 18 May, 2023</span>
                </div>

                <div className="content">
                  <h3>
                    <Link href="/events/details">
                      International Conference on Special Needs Education
                    </Link>
                  </h3>
                  <span className="location">
                    <i className="bx bx-map"></i> Istanbul, Turkey
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-events-box">
                <div className="image">
                  <Link href="/events/details" className="d-block">
                    <Image
                      src="/img/events/event4.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>
                  <span className="date">Sun, 17 May, 2023</span>
                </div>

                <div className="content">
                  <h3>
                    <Link href="/events/details">
                      International Conference on Literacy Teaching
                    </Link>
                  </h3>

                  <span className="location">
                    <i className="bx bx-map"></i> Athens, Greece
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-events-box">
                <div className="image">
                  <Link href="/events/details" className="d-block">
                    <Image
                      src="/img/events/event5.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>
                  <span className="date">Sat, 16 May, 2023</span>
                </div>

                <div className="content">
                  <h3>
                    <Link href="/events/details">
                      International Conference on Educational Administration
                    </Link>
                  </h3>
                  <span className="location">
                    <i className="bx bx-map"></i> Rome, Italy
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-events-box">
                <div className="image">
                  <Link href="/events/details" className="d-block">
                    <Image
                      src="/img/events/event6.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>
                  <span className="date">Fri, 15 May, 2023</span>
                </div>

                <div className="content">
                  <h3>
                    <Link href="/events/details">
                      International Conference on Education and Pedagogy
                    </Link>
                  </h3>
                  <span className="location">
                    <i className="bx bx-map"></i> Athens, Greece
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-events-box">
                <div className="image">
                  <Link href="/events/details" className="d-block">
                    <Image
                      src="/img/events/event7.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>
                  <span className="date">Thu, 14 May, 2023</span>
                </div>

                <div className="content">
                  <h3>
                    <Link href="/events/details">
                      Research Conference Aims and Objectives
                    </Link>
                  </h3>
                  <span className="location">
                    <i className="bx bx-map"></i> Tokyo, Japan
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-events-box">
                <div className="image">
                  <Link href="/events/details" className="d-block">
                    <Image
                      src="/img/events/event8.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>
                  <span className="date">Wed, 13 May, 2023</span>
                </div>

                <div className="content">
                  <h3>
                    <Link href="/events/details">
                      Conference on Gender Discrimination in Education
                    </Link>
                  </h3>
                  <span className="location">
                    <i className="bx bx-map"></i> Oslo, Norway
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-events-box">
                <div className="image">
                  <Link href="/events/details" className="d-block">
                    <Image
                      src="/img/events/event9.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>
                  <span className="date">Tue, 12 May, 2023</span>
                </div>

                <div className="content">
                  <h3>
                    <Link href="/events/details">
                      Quality and Improvement in Education Conference
                    </Link>
                  </h3>
                  <span className="location">
                    <i className="bx bx-map"></i> Tokyo, Japan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsCard;

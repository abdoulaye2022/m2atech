import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import CourseDetailsContent from "../../../components/CourseDetails/CourseDetailsContent";
import RelatedCourses from "../../../components/CourseDetails/RelatedCourses";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Course Details"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Course Details"
      />

      <CourseDetailsContent />

      <RelatedCourses />

      <Footer />
    </>
  );
}

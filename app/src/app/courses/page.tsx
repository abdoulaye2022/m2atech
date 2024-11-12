import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import CoursesGridContent from "../../components/Courses/CoursesGridContent";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Course Grid"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Course Grid"
      />

      <CoursesGridContent />

      <Footer />
    </>
  );
}

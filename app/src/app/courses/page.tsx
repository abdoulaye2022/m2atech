import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import CoursesGridContent from "../../components/Courses/CoursesGridContent";
import Footer from "../../components/Layouts/Footer";
import Projects from "@/components/DigitalMarketingAgency/Projects";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Projects"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Projects Grid"
      />

      <Projects />

      <Footer />
    </>
  );
}

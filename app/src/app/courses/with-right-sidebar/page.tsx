import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import CoursesRightSidebarContent from "../../../components/Courses/CoursesRightSidebarContent";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Courses With Sidebar"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Courses With Sidebar"
      />

      <CoursesRightSidebarContent />

      <Footer />
    </>
  );
}

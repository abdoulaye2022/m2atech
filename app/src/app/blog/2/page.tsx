import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import BlogWithSidebar from "../../../components/Blog/BlogWithSidebar";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog With Sidebar"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Blog With Sidebar"
      />

      <BlogWithSidebar />

      <Footer />
    </>
  );
}

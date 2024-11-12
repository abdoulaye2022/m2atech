import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ServicesStyleFive from "../../../components/Services/ServicesStyleFive";
import StartProject from "../../../components/Common/StartProject";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services Five"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Services Five"
      />

      <ServicesStyleFive />

      <StartProject />

      <Footer />
    </>
  );
}

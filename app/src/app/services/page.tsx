import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ServicesOne from "../../components/Services/ServicesOne";
import StartProject from "../../components/Common/StartProject";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Services"
      />

      <ServicesOne />

      <StartProject />

      <Footer />
    </>
  );
}

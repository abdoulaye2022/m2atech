import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ServicesStyleTwo from "../../../components/Services/ServicesStyleTwo";
import StartProject from "../../../components/Common/StartProject";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services Two"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Services Two"
      />

      <ServicesStyleTwo />

      <StartProject />

      <Footer />
    </>
  );
}

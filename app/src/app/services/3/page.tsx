import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ServicesStyleThree from "../../../components/Services/ServicesStyleThree";
import StartProject from "../../../components/Common/StartProject";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services Three"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Services Three"
      />

      <ServicesStyleThree />

      <StartProject />

      <Footer />
    </>
  );
}

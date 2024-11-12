import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ServicesStyleFour from "../../../components/Services/ServicesStyleFour";
import StartProject from "../../../components/Common/StartProject";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services Four"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Services Four"
      />

      <ServicesStyleFour />

      <StartProject />

      <Footer />
    </>
  );
}

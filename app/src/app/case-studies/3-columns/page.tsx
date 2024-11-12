import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ThreeColumns from "../../../components/CaseStudies/ThreeColumns";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Case Studies 3 Columns"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Case Studies 3 Columns"
      />

      <ThreeColumns />

      <Footer />
    </>
  );
}

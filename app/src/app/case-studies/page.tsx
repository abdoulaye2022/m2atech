import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import TwoColumns from "../../components/CaseStudies/TwoColumns";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Case Studies 2 Columns"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Case Studies 2 Columns"
      />

      <TwoColumns />

      <Footer />
    </>
  );
}

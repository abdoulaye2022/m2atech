import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import FourColumns from "../../../components/CaseStudies/FourColumns";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Case Studies 4 Columns"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Case Studies 4 Columns"
      />

      <FourColumns />

      <Footer />
    </>
  );
}

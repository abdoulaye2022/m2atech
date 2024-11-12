import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ServiceDetailsContent from "../../../components/ServiceDetails/ServiceDetailsContent";
import RelatedServices from "../../../components/ServiceDetails/RelatedServices";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Service Details"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Service Details"
      />

      <ServiceDetailsContent />

      <RelatedServices />

      <Footer />
    </>
  );
}

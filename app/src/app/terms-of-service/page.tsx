import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import TermsOfServiceContent from "../../components/TermsOfService/TermsOfServiceContent";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Terms of Service"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Terms of Service"
      />

      <TermsOfServiceContent />

      <Footer />
    </>
  );
}

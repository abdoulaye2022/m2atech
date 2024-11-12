import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import FaqContent from "../../components/FAQ/FaqContent";
import StartProject from "../../components/Common/StartProject";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="FAQ"
        homePageText="Home"
        homePageUrl="/"
        activePageText="FAQ"
      />

      <FaqContent />

      <StartProject />

      <Footer />
    </>
  );
}

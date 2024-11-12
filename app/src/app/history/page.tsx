import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import OurHistoryContentOne from "../../components/History/OurHistoryContentOne";
import OurHistoryContentTwo from "../../components/History/OurHistoryContentTwo";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="History"
        homePageText="Home"
        homePageUrl="/"
        activePageText="History"
      />

      <OurHistoryContentOne />

      <OurHistoryContentTwo />

      <Footer />
    </>
  );
}

import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
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
      <Footer />
    </>
  );
}

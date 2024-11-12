import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import TeamStyleOne from "../../components/Team/TeamStyleOne";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Team"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Team"
      />

      <TeamStyleOne />

      <Footer />
    </>
  );
}

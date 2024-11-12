import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import TeamStyleTwo from "../../../components/Team/TeamStyleTwo";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Team Two"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Team Two"
      />

      <TeamStyleTwo />

      <Footer />
    </>
  );
}

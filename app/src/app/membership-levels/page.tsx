import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import MembershipLevelsTable from "../../components/MembershipLevels/MembershipLevelsTable";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Member Ship Levels"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Member Ship Levels"
      />

      <MembershipLevelsTable />

      <Footer />
    </>
  );
}

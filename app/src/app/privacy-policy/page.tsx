import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import PrivacyPolicyContent from "../../components/PrivacyPolicy/PrivacyPolicyContent";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Privacy Policy"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Privacy Policy"
      />

      <PrivacyPolicyContent />

      <Footer />
    </>
  );
}

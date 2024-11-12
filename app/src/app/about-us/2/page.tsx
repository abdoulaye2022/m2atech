import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import AboutUsContent from "../../../components/AboutUsTwo/AboutUsContent";
import OurMission from "../../../components/AboutUsTwo/OurMission";
import Funfacts from "../../../components/AboutUsTwo/Funfacts";
import HowItWork from "../../../components/AboutUsTwo/HowItWork";
import History from "../../../components/AboutUsTwo/History";
import TeamMembers from "../../../components/AboutUsTwo/TeamMembers";
import Testimonials from "../../../components/AboutUsTwo/Testimonials";
import Partner from "../../../components/AboutUsTwo/Partner";
import StartProjectTwo from "../../../components/Common/StartProjectTwo";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About Us Two"
        homePageText="Home"
        homePageUrl="/"
        activePageText="About Us Two"
      />

      <AboutUsContent />

      <OurMission />

      <Funfacts />

      <HowItWork />

      <History />

      <TeamMembers />

      <Testimonials />

      <Partner />

      <StartProjectTwo />

      <Footer />
    </>
  );
}

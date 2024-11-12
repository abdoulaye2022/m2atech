import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import MainBanner from "../../components/DataScienceAndMLCompany/MainBanner";
import OurSolutions from "../../components/DataScienceAndMLCompany/OurSolutions";
import AboutUs from "../../components/DataScienceAndMLCompany/AboutUs";
import OurServices from "../../components/DataScienceAndMLCompany/OurServices";
import HowItWork from "../../components/DataScienceAndMLCompany/HowItWork";
import CaseStudySlider from "../../components/DataScienceAndMLCompany/CaseStudySlider";
import TeamMembers from "../../components/DataScienceAndMLCompany/TeamMembers";
import Testimonials from "../../components/DataScienceAndMLCompany/Testimonials";
import Partner from "../../components/DataScienceAndMLCompany/Partner";
import BlogPost from "../../components/DataScienceAndMLCompany/BlogPost";
import StartProject from "../../components/DataScienceAndMLCompany/StartProject";
import Footer from "../../components/Layouts/Footer";

export default function DataScienceAndMLCompany() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <OurSolutions />

      <AboutUs />

      <OurServices />

      <HowItWork />

      <CaseStudySlider />

      <TeamMembers />

      <Testimonials />

      <Partner />

      <BlogPost />

      <StartProject />

      <Footer />
    </>
  );
}

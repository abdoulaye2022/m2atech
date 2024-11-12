import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import MainBanner from "../../components/BigDataAnalysisStartup/MainBanner";
import FeaturedServices from "../../components/BigDataAnalysisStartup/FeaturedServices";
import WhyChooseUs from "../../components/BigDataAnalysisStartup/WhyChooseUs";
import WhatWeDo from "../../components/BigDataAnalysisStartup/WhatWeDo";
import Funfacts from "../../components/BigDataAnalysisStartup/Funfacts";
import Services from "../../components/BigDataAnalysisStartup/Services";
import Testimonials from "../../components/Common/Testimonials";
import WeServe from "../../components/BigDataAnalysisStartup/WeServe";
import TeamMembers from "../../components/BigDataAnalysisStartup/TeamMembers";
import CaseStudy from "../../components/BigDataAnalysisStartup/CaseStudy";
import BlogPost from "../../components/BigDataAnalysisStartup/BlogPost";
import StartProject from "../../components/Common/StartProject";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <FeaturedServices />

      <WhyChooseUs />

      <WhatWeDo />

      <Funfacts />

      <Services />

      <Testimonials />

      <WeServe />

      <TeamMembers />

      <CaseStudy />

      <BlogPost />

      <StartProject />

      <Footer />
    </>
  );
}

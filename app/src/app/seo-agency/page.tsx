import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import MainBanner from "../../components/SEOAgency/MainBanner";
import FeaturedServices from "../../components/SEOAgency/FeaturedServices";
import AboutArea from "../../components/SEOAgency/AboutArea";
import FunFacts from "../../components/SEOAgency/FunFacts";
import OurServices from "../../components/SEOAgency/OurServices";
import CaseStudy from "../../components/SEOAgency/CaseStudy";
import WhyChooseUs from "../../components/SEOAgency/WhyChooseUs";
import Testimonials from "../../components/SEOAgency/Testimonials";
import Pricing from "../../components/SEOAgency/Pricing";
import TeamMember from "../../components/SEOAgency/TeamMembers";
import AnalysisForm from "../../components/SEOAgency/AnalysisForm";
import Partner from "../../components/SEOAgency/Partner";
import OurBlog from "../../components/SEOAgency/OurBlog";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <FeaturedServices />

      <AboutArea />

      <FunFacts />

      <OurServices />

      <CaseStudy />

      <WhyChooseUs />

      <Testimonials />

      <Pricing />

      <TeamMember />

      <AnalysisForm />

      <Partner />

      <OurBlog />

      <Footer />
    </>
  );
}

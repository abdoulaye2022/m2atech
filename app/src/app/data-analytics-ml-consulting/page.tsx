import React from "react";
import NavbarThree from "../../components/Layouts/NavbarThree";
import MainBanner from "../../components/DataAnalyticsMLConsulting/MainBanner";
import OurSolutions from "../../components/DataAnalyticsMLConsulting/OurSolutions";
import AboutArea from "../../components/DataAnalyticsMLConsulting/AboutArea";
import OurMission from "../../components/DataAnalyticsMLConsulting/OurMission";
import Funfacts from "../../components/DataAnalyticsMLConsulting/Funfacts";
import UpcomingBootcamps from "../../components/DataAnalyticsMLConsulting/UpcomingBootcamps";
import HowItWork from "../../components/DataAnalyticsMLConsulting/HowItWork";
import RecentProjects from "../../components/DataAnalyticsMLConsulting/RecentProjects";
import TeamMembers from "../../components/DataAnalyticsMLConsulting/TeamMembers";
import Testimonials from "../../components/DataAnalyticsMLConsulting/Testimonials";
import Partner from "../../components/DataAnalyticsMLConsulting/Partner";
import BlogPost from "../../components/DataAnalyticsMLConsulting/BlogPost";
import StartProjectTwo from "../../components/Common/StartProjectTwo";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <MainBanner />

      <OurSolutions />

      <AboutArea />

      <OurMission />

      <Funfacts />

      <UpcomingBootcamps />

      <HowItWork />

      <RecentProjects />

      <TeamMembers />

      <Testimonials />

      <Partner />

      <BlogPost />

      <StartProjectTwo />

      <Footer />
    </>
  );
}

import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import MainBanner from "../../components/DataScienceOnlineCourses/MainBanner";
import Partner from "../../components/DataScienceOnlineCourses/Partner";
import FeaturedServices from "../../components/DataScienceOnlineCourses/FeaturedServices";
import AboutUs from "../../components/DataScienceOnlineCourses/AboutUs";
import OurMission from "../../components/DataScienceOnlineCourses/OurMission";
import Funfacts from "../../components/DataScienceOnlineCourses/Funfacts";
import Courses from "../../components/DataScienceOnlineCourses/Courses";
import ExploreLearning from "../../components/DataScienceOnlineCourses/ExploreLearning";
import UpcomingBootcamps from "../../components/DataScienceOnlineCourses/UpcomingBootcamps";
import Testimonials from "../../components/DataScienceOnlineCourses/Testimonials";
import BlogPost from "../../components/DataScienceOnlineCourses/BlogPost";
import Subscribe from "../../components/DataScienceOnlineCourses/Subscribe";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Partner />

      <FeaturedServices />

      <AboutUs />

      <OurMission />

      <Funfacts />

      <Courses />

      <ExploreLearning />

      <UpcomingBootcamps />

      <Testimonials />

      <BlogPost />

      <Subscribe />

      <Footer />
    </>
  );
}

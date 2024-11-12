import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import EventDetailsContent from "../../../components/Events/EventDetailsContent";
import EventSpeakers from "../../../components/Events/EventSpeakers";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Event Details"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Event Details"
      />

      <EventDetailsContent />

      <EventSpeakers />

      <Footer />
    </>
  );
}

import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import EventsCard from "../../components/Events/EventsCard";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Events"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Events"
      />

      <EventsCard />

      <Footer />
    </>
  );
}

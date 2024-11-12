import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import TestimonialsStyleOne from "../../components/Testimonials/TestimonialsStyleOne";
import TestimonialsStyleTwo from "../../components/Testimonials/TestimonialsStyleTwo";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Testimonials"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Testimonials"
      />

      <TestimonialsStyleOne />

      <TestimonialsStyleTwo />

      <Footer />
    </>
  );
}

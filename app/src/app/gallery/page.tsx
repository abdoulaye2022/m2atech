import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import GalleryImage from "../../components/Gallery/GalleryImage";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Gallery"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Gallery"
      />

      <GalleryImage />

      <Footer />
    </>
  );
}

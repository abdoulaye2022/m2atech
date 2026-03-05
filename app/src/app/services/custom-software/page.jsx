"use client";

import ContactBanner from "@/components/Partials/ContactBanner";
import CustomSoftwareSection from "@/components/Services/CustomSoftwareSection";
import ProcessSection from "@/components/Services/ProcessSection";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box } from "@chakra-ui/react";

function CustomSoftwarePage() {
  return (
    <>
      <Navbar />
      <Box pt="80px" bg="var(--color-bg-primary)">
        <CustomSoftwareSection />
        <ContactBanner />
        <ProcessSection />
        <FooterApp />
      </Box>
    </>
  );
}

export default CustomSoftwarePage;

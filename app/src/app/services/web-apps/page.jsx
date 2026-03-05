"use client";

import ContactBanner from "@/components/Partials/ContactBanner";
import ProcessSection from "@/components/Services/ProcessSection";
import WebAppsSection from "@/components/Services/WebAppsSection";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box } from "@chakra-ui/react";

function WebAppsPage() {
  return (
    <>
      <Navbar />
      <Box pt="80px" bg="var(--color-bg-primary)">
        <WebAppsSection />
        <ContactBanner />
        <ProcessSection />
        <FooterApp />
      </Box>
    </>
  );
}

export default WebAppsPage;

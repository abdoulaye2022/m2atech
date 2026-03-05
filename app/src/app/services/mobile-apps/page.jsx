"use client";

import ContactBanner from "@/components/Partials/ContactBanner";
import MobileAppsSection from "@/components/Services/MobileAppsSection";
import ProcessSection from "@/components/Services/ProcessSection";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box } from "@chakra-ui/react";

function MobileAppsPage() {
  return (
    <>
      <Navbar />
      <Box pt="80px" bg="var(--color-bg-primary)">
        <MobileAppsSection />
        <ContactBanner />
        <ProcessSection />
        <FooterApp />
      </Box>
    </>
  );
}

export default MobileAppsPage;

"use client";

import ContactBanner from "@/components/Partials/ContactBanner";
import MaintenanceSection from "@/components/Services/MaintenanceSection";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box } from "@chakra-ui/react";

function MaintenancePage() {
  return (
    <>
      <Navbar />
      <Box pt="80px" bg="var(--color-bg-primary)">
        <MaintenanceSection />
        <ContactBanner />
        <FooterApp />
      </Box>
    </>
  );
}

export default MaintenancePage;

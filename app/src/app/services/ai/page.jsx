"use client";

import ContactBanner from "@/components/Partials/ContactBanner";
import ProcessSection from "@/components/Services/ProcessSection";
import AiSection from "@/components/Services/AiSection";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box } from "@chakra-ui/react";

function AiPage() {
  return (
    <>
      <Navbar />
      <Box pt="80px" bg="var(--color-bg-primary)">
        <AiSection />
        <ContactBanner />
        <ProcessSection />
        <FooterApp />
      </Box>
    </>
  );
}

export default AiPage;

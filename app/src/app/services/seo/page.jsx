"use client";

import ContactBanner from "@/components/Partials/ContactBanner";
import ProcessSection from "@/components/Services/ProcessSection";
import SeoSection from "@/components/Services/SeoSection";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box } from "@chakra-ui/react";

function SeoPage() {
  return (
    <>
      <Navbar />
      <Box pt="80px" bg="var(--color-bg-primary)">
        <SeoSection />
        <ContactBanner />
        <ProcessSection />
        <FooterApp />
      </Box>
    </>
  );
}

export default SeoPage;

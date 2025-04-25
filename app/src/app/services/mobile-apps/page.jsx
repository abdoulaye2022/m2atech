"use client";

import ContactBanner from "@/components/Partials/ContactBanner";
import MobileAppsSection from "@/components/Services/MobileAppsSection";
import ProcessSection from "@/components/Services/ProcessSection";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box, ChakraProvider } from "@chakra-ui/react";

function MobileAppsPage() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Box pt="102px">
          <MobileAppsSection />

          <ContactBanner />

          <ProcessSection />
          <FooterApp />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default MobileAppsPage;

"use client";

import ContactBanner from "@/components/Partials/ContactBanner";
import ProcessSection from "@/components/Services/ProcessSection";
import CybersecuritySection from "@/components/Services/CybersecuritySection";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box, ChakraProvider } from "@chakra-ui/react";

function CybersecurityPage() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Box pt="102px">
          <CybersecuritySection />

          <ContactBanner />

          <ProcessSection />
          <FooterApp />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default CybersecurityPage;

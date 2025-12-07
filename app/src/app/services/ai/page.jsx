"use client";

import ContactBanner from "@/components/Partials/ContactBanner";
import ProcessSection from "@/components/Services/ProcessSection";
import AiSection from "@/components/Services/AiSection";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box, ChakraProvider } from "@chakra-ui/react";

function AiPage() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Box pt="102px">
          <AiSection />

          <ContactBanner />

          <ProcessSection />
          <FooterApp />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default AiPage;

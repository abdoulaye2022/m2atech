"use client";

import ContactBanner from "@/components/Partials/ContactBanner";
import ProcessSection from "@/components/Services/ProcessSection";
import SeoSection from "@/components/Services/SeoSection";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box, ChakraProvider } from "@chakra-ui/react";

function SeoPage() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Box pt="102px">
          <SeoSection />

          <ContactBanner />

          <ProcessSection />
          <FooterApp />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default SeoPage;

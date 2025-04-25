"use client";

import ContactBanner from "@/components/Partials/ContactBanner";
import CustomSoftwareSection from "@/components/Services/CustomSoftwareSection";
import ProcessSection from "@/components/Services/ProcessSection";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box, ChakraProvider } from "@chakra-ui/react";

function CustomSoftwarePage() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Box pt="102px">
          <CustomSoftwareSection />

          <ContactBanner />

          <ProcessSection />
          <FooterApp />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default CustomSoftwarePage;

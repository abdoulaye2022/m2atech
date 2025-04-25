"use client";

import MainBanner from "@/components/Home/MainBanner";
import ServicesSection from "@/components/Home/ServicesSection";
import ToolsSection from "@/components/Home/ToolsSection";
import ContactBanner from "@/components/Partials/ContactBanner";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box, ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <Navbar />
      <Box pt="102px">
        <MainBanner />
        <ServicesSection />
        <ContactBanner />
        <ToolsSection />
        <FooterApp />
      </Box>
    </ChakraProvider>
  );
}

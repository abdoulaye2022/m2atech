"use client";

import Contact from "@/components/Contact/Contact";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box, ChakraProvider } from "@chakra-ui/react";

export default function ContactPage() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Box pt="102px">
          <Contact />
          <FooterApp />
        </Box>
      </ChakraProvider>
    </>
  );
}

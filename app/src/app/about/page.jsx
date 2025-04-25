"use client";

import About from "@/components/About/About";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box, ChakraProvider } from "@chakra-ui/react";

function AboutPage() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Box pt="102px">
          <About />
          <FooterApp />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default AboutPage;

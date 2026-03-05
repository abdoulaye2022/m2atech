"use client";

import About from "@/components/About/About";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box } from "@chakra-ui/react";

function AboutPage() {
  return (
    <>
      <Navbar />
      <Box pt="80px" bg="var(--color-bg-primary)">
        <About />
        <FooterApp />
      </Box>
    </>
  );
}

export default AboutPage;

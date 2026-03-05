"use client";

import Contact from "@/components/Contact/Contact";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box } from "@chakra-ui/react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Box pt="80px" bg="var(--color-bg-primary)">
        <Contact />
        <FooterApp />
      </Box>
    </>
  );
}

"use client";

import React from "react";
import CookiePolicy from "@/components/cookie-policy/CookiePolicy";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box } from "@chakra-ui/react";

const CookiePage = () => {
  return (
    <>
      <Navbar />
      <Box pt="80px" bg="var(--color-bg-primary)">
        <CookiePolicy />
        <FooterApp />
      </Box>
    </>
  );
};

export default CookiePage;

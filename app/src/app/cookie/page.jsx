"use client";

import React from "react";
import CookiePolicy from "@/components/cookie-policy/CookiePolicy";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box, ChakraProvider } from "@chakra-ui/react";

const CookiePage = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <Box pt="102px">
        <CookiePolicy />
        <FooterApp />
      </Box>
    </ChakraProvider>
  );
};

export default CookiePage;

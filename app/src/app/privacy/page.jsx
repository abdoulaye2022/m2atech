"use client";

import React from "react";
import PrivacyPolicy from "@/components/privacy-policy/PrivacyPolicy";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box, ChakraProvider } from "@chakra-ui/react";

const PrivacyPolicyPage = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <Box pt="102px">
        <PrivacyPolicy />
        <FooterApp />
      </Box>
    </ChakraProvider>
  );
};

export default PrivacyPolicyPage;

"use client";

import React from "react";
import PrivacyPolicy from "@/components/privacy-policy/PrivacyPolicy";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box } from "@chakra-ui/react";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Navbar />
      <Box pt="80px" bg="var(--color-bg-primary)">
        <PrivacyPolicy />
        <FooterApp />
      </Box>
    </>
  );
};

export default PrivacyPolicyPage;

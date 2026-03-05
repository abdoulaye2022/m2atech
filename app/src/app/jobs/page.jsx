"use client";

import React from "react";
import Jobs from "@/components/Jobs/Jobs";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box } from "@chakra-ui/react";

const JobsPage = () => {
  return (
    <>
      <Navbar />
      <Box pt="80px" bg="var(--color-bg-primary)">
        <Jobs />
        <FooterApp />
      </Box>
    </>
  );
};

export default JobsPage;

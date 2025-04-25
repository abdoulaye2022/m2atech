"use client";

import React from "react";
import Jobs from "@/components/Jobs/Jobs";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box, ChakraProvider } from "@chakra-ui/react";

const JobsPage = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <Box pt="102px">
        <Jobs />
        <FooterApp />
      </Box>
    </ChakraProvider>
  );
};

export default JobsPage;

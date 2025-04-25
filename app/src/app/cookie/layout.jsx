"use client";

import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box, ChakraProvider } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Box pt="102px">
        {children}
        <FooterApp />
      </Box>
    </ChakraProvider>
  );
}

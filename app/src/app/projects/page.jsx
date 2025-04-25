"use client";

import ProjectSection from "@/components/Projects/ProjectSection";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box, ChakraProvider } from "@chakra-ui/react";

function ProjectsPage() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Box pt="102px">
          <ProjectSection />
          <FooterApp />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default ProjectsPage;

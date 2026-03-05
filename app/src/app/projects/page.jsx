"use client";

import ProjectSection from "@/components/Projects/ProjectSection";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box } from "@chakra-ui/react";

function ProjectsPage() {
  return (
    <>
      <Navbar />
      <Box pt="80px" bg="var(--color-bg-primary)">
        <ProjectSection />
        <FooterApp />
      </Box>
    </>
  );
}

export default ProjectsPage;

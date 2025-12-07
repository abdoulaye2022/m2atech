"use client";

import MainBanner from "@/components/Home/MainBanner";
import ServicesSection from "@/components/Home/ServicesSection";
import ToolsSection from "@/components/Home/ToolsSection";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";
import StatsSection from "@/components/Home/StatsSection";
import ClientsSection from "@/components/Home/ClientsSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import ContactBanner from "@/components/Partials/ContactBanner";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

export default function Home() {
  return (
    <>
      <Navbar />
      <MotionBox
        pt="102px"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <MainBanner />
        <ServicesSection />
        <StatsSection />
        <WhyChooseUsSection />
        <ContactBanner />
        <ToolsSection />
        <ClientsSection />
        <TestimonialsSection />
        <FooterApp />
      </MotionBox>
    </>
  );
}

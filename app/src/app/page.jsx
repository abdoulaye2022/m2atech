"use client";

import MainBanner from "@/components/Home/MainBanner";
import ServicesSection from "@/components/Home/ServicesSection";
import ToolsSection from "@/components/Home/ToolsSection";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";
import StatsSection from "@/components/Home/StatsSection";
import ClientsSection from "@/components/Home/ClientsSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import FAQSection from "@/components/Home/FAQSection";
import BlogPreviewSection from "@/components/Home/BlogPreviewSection";
import ContactBanner from "@/components/Partials/ContactBanner";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import FloatingCTA from "@/components/Partials/FloatingCTA";
import ProcessSection from "@/components/Services/ProcessSection";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <MotionBox
        initial="initial"
        animate="animate"
        variants={pageVariants}
      >
        <MainBanner />
        <ServicesSection />
        <StatsSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <ToolsSection />
        <ContactBanner />
        <ClientsSection />
        <TestimonialsSection />
        <BlogPreviewSection />
        <FAQSection />
        <FooterApp />
      </MotionBox>
      <FloatingCTA />
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

const MotionBox = motion(Box);

const StaggeredContainer = ({ 
  children, 
  staggerDelay = 0.1,
  initialDelay = 0,
  ...props 
}) => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: initialDelay,
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold: 0.1 }}
      variants={containerVariants}
      {...props}
    >
      {children}
    </MotionBox>
  );
};

export default StaggeredContainer;
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Box } from "@chakra-ui/react";

const MotionBox = motion(Box);

const AnimatedSection = ({ 
  children, 
  delay = 0, 
  direction = "up",
  duration = 0.6,
  distance = 30,
  ...props 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const directionVariants = {
    up: { y: distance, opacity: 0 },
    down: { y: -distance, opacity: 0 },
    left: { x: distance, opacity: 0 },
    right: { x: -distance, opacity: 0 },
    scale: { scale: 0.8, opacity: 0 },
    fade: { opacity: 0 }
  };

  const variants = {
    hidden: directionVariants[direction],
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <MotionBox
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      {...props}
    >
      {children}
    </MotionBox>
  );
};

export default AnimatedSection;
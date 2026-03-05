"use client";

import React, { useState, useEffect } from "react";
import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import { FaCommentDots } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setVisible(scrollPercent > 0.3);
    };

    const timer = setTimeout(() => setVisible(true), 3000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <MotionBox
          position="fixed"
          bottom={{ base: 4, md: 6 }}
          right={{ base: 4, md: 6 }}
          zIndex={1300}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Link href="/contact">
            <Flex
              as="button"
              align="center"
              gap={3}
              bg="#ff5d22"
              color="white"
              px={{ base: 4, md: hovered ? 6 : 4 }}
              py={4}
              borderRadius="full"
              cursor="pointer"
              boxShadow="0 4px 20px rgba(255, 93, 34, 0.4)"
              transition="all 0.3s ease"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              _hover={{
                bg: "#e04d15",
                boxShadow: "0 6px 30px rgba(255, 93, 34, 0.5)",
                transform: "translateY(-2px)",
              }}
              aria-label="Demarrer un projet - Contactez M2ATech"
            >
              <Icon as={FaCommentDots} w={5} h={5} />
              <Text
                fontWeight="700"
                fontFamily="var(--font-display)"
                fontSize="sm"
                display={{ base: "none", md: "block" }}
                whiteSpace="nowrap"
              >
                {hovered ? "Reponse sous 24h" : "Demarrer un projet"}
              </Text>
            </Flex>
          </Link>
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;

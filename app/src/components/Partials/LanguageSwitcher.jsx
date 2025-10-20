"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Text,
  useColorModeValue,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaGlobe, FaChevronDown } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);
const MotionMenuItem = motion(MenuItem);

const LanguageSwitcher = ({ variant = "button" }) => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });
  
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const hoverBg = useColorModeValue("gray.50", "gray.700");

  const languages = [
    { code: "en", name: "EN", fullName: "English" },
    { code: "fr", name: "FR", fullName: "Français" },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.2,
      },
    }),
    exit: { opacity: 0, x: -10 },
  };

  if (variant === "icon") {
    return (
      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <MenuButton
          as={Button}
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          bg="whiteAlpha.200"
          backdropFilter="blur(10px)"
          border="1px solid"
          borderColor="whiteAlpha.300"
          color="white"
          fontWeight="bold"
          fontSize="xs"
          px={3}
          py={2}
          minH="32px"
          borderRadius="full"
          _hover={{
            bg: "whiteAlpha.300",
            borderColor: "whiteAlpha.400",
            transform: "translateY(-1px)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
          }}
          _active={{
            bg: "whiteAlpha.400",
            transform: "translateY(0)"
          }}
          transition="all 0.2s ease"
          aria-label="Change language"
          rightIcon={
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaChevronDown size="10px" />
            </motion.div>
          }
        >
          {currentLanguage?.name}
        </MenuButton>
        <AnimatePresence>
          {isOpen && (
            <MotionBox
              as={MenuList}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              bg="white"
              backdropFilter="blur(20px)"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="xl"
              boxShadow="0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              overflow="hidden"
              minW="140px"
              p={1}
            >
              {languages.map((lang, index) => (
                <MotionMenuItem
                  key={lang.code}
                  custom={index}
                  variants={itemVariants}
                  onClick={() => handleLanguageChange(lang.code)}
                  bg={language === lang.code ? "orange.500" : "transparent"}
                  color={language === lang.code ? "white" : "gray.700"}
                  fontWeight={language === lang.code ? "bold" : "medium"}
                  borderRadius="lg"
                  mx={1}
                  _hover={{
                    bg: language === lang.code ? "orange.600" : "gray.50",
                    transform: "translateX(2px)",
                  }}
                  _focus={{
                    bg: language === lang.code ? "orange.600" : "gray.50"
                  }}
                  transition="all 0.2s ease"
                  px={4}
                  py={3}
                >
                  <HStack spacing={3} justify="space-between" w="full">
                    <HStack spacing={3}>
                      <Text fontSize="sm" fontWeight="inherit">{lang.fullName}</Text>
                    </HStack>
                    {language === lang.code && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                      >
                        <Box
                          w={2}
                          h={2}
                          bg="white"
                          borderRadius="full"
                        />
                      </motion.div>
                    )}
                  </HStack>
                </MotionMenuItem>
              ))}
            </MotionBox>
          )}
        </AnimatePresence>
      </Menu>
    );
  }

  return (
    <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <MenuButton
        as={Button}
        variant="ghost"
        size={isMobile ? "sm" : "md"}
        onClick={() => setIsOpen(!isOpen)}
        _hover={{
          bg: hoverBg,
          transform: "translateY(-1px)",
        }}
        _active={{
          bg: hoverBg,
        }}
        transition="all 0.2s ease"
        leftIcon={<FaGlobe />}
        rightIcon={
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <FaChevronDown size="12px" />
          </motion.div>
        }
      >
        <HStack spacing={2}>
          {!isMobile && (
            <>
              <Text fontSize="sm" fontWeight="medium">
                {currentLanguage?.fullName}
              </Text>
            </>
          )}
          {isMobile && (
            <Text fontSize="sm" fontWeight="medium">{currentLanguage?.name}</Text>
          )}
        </HStack>
      </MenuButton>
      
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            as={MenuList}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            bg="white"
            backdropFilter="blur(20px)"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="xl"
            boxShadow="0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            overflow="hidden"
            minW="180px"
            p={1}
          >
            {languages.map((lang, index) => (
              <MotionMenuItem
                key={lang.code}
                custom={index}
                variants={itemVariants}
                onClick={() => handleLanguageChange(lang.code)}
                bg={language === lang.code ? "orange.500" : "transparent"}
                color={language === lang.code ? "white" : "gray.700"}
                fontWeight={language === lang.code ? "bold" : "medium"}
                borderRadius="lg"
                mx={1}
                _hover={{
                  bg: language === lang.code ? "orange.600" : "gray.50",
                  transform: "translateX(2px)",
                }}
                _focus={{
                  bg: language === lang.code ? "orange.600" : "gray.50"
                }}
                transition="all 0.2s ease"
                px={4}
                py={3}
              >
                <HStack spacing={3} justify="space-between" w="full">
                  <HStack spacing={3}>
                    <Text fontSize="sm" fontWeight="inherit">{lang.fullName}</Text>
                  </HStack>
                  {language === lang.code && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                    >
                      <Box
                        w={2}
                        h={2}
                        bg="white"
                        borderRadius="full"
                      />
                    </motion.div>
                  )}
                </HStack>
              </MotionMenuItem>
            ))}
          </MotionBox>
        )}
      </AnimatePresence>
    </Menu>
  );
};

export default LanguageSwitcher;
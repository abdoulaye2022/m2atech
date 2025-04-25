"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  IconButton,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Link,
  HStack,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  PhoneIcon,
  EmailIcon,
} from "@chakra-ui/icons";

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = "#ff5d22";

  return (
    <Stack direction={"row"} spacing={8} align="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={500}
                color={linkColor}
                position="relative"
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#ff5d22",
                    transform: "scaleX(1)",
                    transition: "transform 0.3s ease",
                  },
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#ff5d22",
                  transform: "scaleX(0)",
                  transition: "transform 0.3s ease",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={useColorModeValue("white", "gray.800")}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("orange.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#ff5d22" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Button
        w="full"
        color={"#ff5d22"}
        bg={"white"}
        _hover={{
          bg: "gray.100",
        }}
        mt={2}
      >
        Work with us
      </Button>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Services",
    href: "#",
    children: [
      {
        label: "Web Apps",
        href: "/services/web-apps",
      },
      {
        label: "Mobile Apps",
        href: "/services/mobile-apps",
      },
      {
        label: "Custom Software",
        href: "/services/custom-software",
      },
      {
        label: "SEO",
        href: "/services/seo",
      },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Jobs",
    href: "/jobs",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const ModernNavbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position="fixed" width="full" zIndex="sticky" top={0}>
      {/* Bandeau supérieur */}
      <Box bg="#ff5d22" color="white" py={1} px={4}>
        <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
          <HStack spacing={4}>
            <HStack spacing={2}>
              <Icon as={EmailIcon} fontSize="xs" />
              <Link
                href="mailto:contact@m2atech.com"
                fontSize="xs"
                _hover={{ textDecoration: "none", opacity: 0.8 }}
              >
                contact@m2atech.com
              </Link>
            </HStack>
            <HStack
              spacing={2}
              as="a"
              href="tel:+15068506548"
              _hover={{
                color: "#DD6B20",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              transition="color 0.2s"
            >
              <Icon as={PhoneIcon} fontSize="xs" />
              <Text fontSize="xs">+1 (506) 850-6548</Text>
            </HStack>
          </HStack>

          <Menu>
            <MenuButton
              as={Button}
              size="xs"
              // bg="white"
              color="black"
              // _hover={{ bg: "white" }}
              _focus={{
                bg: "gray",
                color: "black",
              }}
              rightIcon={<ChevronDownIcon />}
            >
              Français
            </MenuButton>
            <MenuList>
              <MenuItem>Français</MenuItem>
              <MenuItem>English</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>

      {/* Navbar principal */}
      <Box
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        bg={useColorModeValue("white", "gray.800")}
      >
        <Flex
          color={useColorModeValue("gray.600", "white")}
          minH={"70px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"center"}
          maxW="1200px"
          mx="auto"
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              color={"inherit"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>

          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }} // Centré sur mobile, aligné à gauche sur desktop
            align="center"
          >
            <Link href="/" _hover={{ textDecoration: "none" }}>
              {/* Logo pour desktop */}
              <Image
                src="/logo.png"
                alt="M2ATech Logo"
                height="40px"
                objectFit="contain"
                display={{ base: "none", md: "block" }}
              />

              {/* Logo pour mobile - version centrée */}
              <Image
                src="/logo4.png"
                alt="M2ATech Logo"
                height="40px"
                objectFit="contain"
                display={{ base: "block", md: "none" }}
                mx="auto" // Centre le logo horizontalement
              />
            </Link>

            <Flex display={{ base: "none", md: "flex" }} ml={10} align="center">
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"black"}
              href={"/contact"}
              _hover={{
                bg: "gray.800",
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              px={6}
              py={4}
            >
              Work with us
            </Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </Box>
  );
};

export default ModernNavbar;

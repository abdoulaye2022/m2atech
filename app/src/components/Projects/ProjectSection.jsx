"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  Tag,
  Image,
  AspectRatio,
  Button,
  useBreakpointValue,
  IconButton,
  Link,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  FaCode,
  FaMobile,
  FaGlobe,
  FaChartLine,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaExpand,
  FaCut,
  FaTruckMoving,
  FaUtensils,
  FaMusic,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

const projects = [
  {
    title: "Masta Barber",
    description:
      "Professional website for a barber shop in Moncton featuring services, booking system, and gallery",
    tags: ["React", "JavaScript", "HTML", "CSS", "Booking System"],
    icon: FaCut, // Changed from FaMobile to FaCut (scissors icon)
    category: "Website",
    images: [
      "/img/projects/mastabarber1.PNG",
      "/img/projects/mastabarber2.PNG",
      "/img/projects/mastabarber3.PNG",
    ],
    features: [
      "Service Presentation",
      "Online Booking System",
      "Barber Portfolio",
      "Gallery of Works",
      "Contact Information",
      "Mobile Responsive",
    ],
    liveUrl: "https://mastabarber.com/",
  },
  {
    title: "Kane Eco Construction",
    description:
      "Professional website for an eco-friendly construction company in Niger featuring company presentation, projects showcase, and contact solutions",
    tags: ["Php", "JavaScript", "HTML", "CSS", "Bootstrap", "SEO"],
    icon: FaGlobe,
    category: "Website & Admin Panel",
    images: [
      "/img/projects/kane1.png",
      "/img/projects/kane2.png",
      "/img/projects/kane3.png",
    ],
    features: [
      "Responsive Company Website",
      "Projects Portfolio Gallery",
      "Admin Dashboard",
      "SEO Optimization",
      "Contact Form Integration",
      "Sustainable Materials Showcase",
    ],
    liveUrl: "https://kane-eco-construction.com",
  },
  {
    title: "Trio Pro Move & Clean Service",
    description:
      "Professional website for a full-service moving and cleaning company featuring service booking, eco-friendly approach, and customer portal",
    tags: [
      "Next.js",
      "React",
      "Redux",
      "PHP",
      "MySQL",
      "SEO",
      "Responsive Design",
    ],
    icon: FaTruckMoving, // More appropriate icon for moving/cleaning business
    category: "Business Website",
    images: [
      "/img/projects/trio1.PNG",
      "/img/projects/trio2.PNG",
      "/img/projects/trio3.PNG",
    ],
    features: [
      "Service Presentation",
      "Online Booking System",
      "Customer Account Portal",
      "Eco-Friendly Products Showcase",
      "Service Guarantee Highlight",
      "Mobile Responsive Design",
      "Multilingual Support",
      "SEO Optimized",
    ],
    liveUrl: "https://www.triopromovecleanservice.com/",
  },
  {
    title: "ZaiqaEats",
    description:
      "Online platform for an authentic Indian restaurant in Moncton featuring menu, online ordering, and reservation system",
    tags: [
      "Next.js",
      "React",
      "Redux",
      "Node.js",
      "MongoDB",
      "SEO",
      "Responsive Design",
      "Payment Integration",
    ],
    icon: FaUtensils, // Icône plus appropriée pour un restaurant
    category: "Restaurant Website",
    images: [
      "/img/projects/zaiqaeats1.PNG",
      "/img/projects/zaiqaeats2.PNG",
      "/img/projects/zaiqaeats3.PNG",
    ],
    features: [
      "Menu Display with Categories",
      "Online Food Ordering",
      "Table Reservation System",
      "Customer Reviews Section",
      "Special Offers Highlight",
      "Mobile-Friendly Design",
      "Multilingual Support (English/Hindi)",
      "Secure Payment Gateway",
      "Food Delivery Tracking",
    ],
    liveUrl: "https://www.zaiqaeats.com",
  },
  {
    title: "Maelo Studio",
    description:
      "Professional music production platform offering mixing, mastering, and marketing services for artists, with online booking and project management",
    tags: [
      "Next.js",
      "React",
      "Redux",
      "Node.js",
      "MongoDB",
      "SEO",
      "Responsive Design",
      "Audio Processing API",
    ],
    icon: FaMusic, // Icône musicale
    category: "Music Production Platform",
    images: [
      "/img/projects/maelo1.PNG",
      "/img/projects/maelo2.PNG",
      "/img/projects/maelo3.PNG",
    ],
    features: [
      "Service Packages Display (Mixing/Mastering/Marketing)",
      "Online Booking System",
      "Secure File Upload for Tracks",
      "Project Progress Tracking",
      "Client Portal with Revision Requests",
      "Payment Processing",
      "Audio Preview Tool",
      "Service Comparison Charts",
      "Artist Testimonials Section",
    ],
    liveUrl: "https://www.maelostudio.com/",
  },
  {
    title: "Kilo-Share",
    description:
      "Peer-to-peer platform connecting travelers for kilo sharing during trips, with secure payment and matching system",
    tags: [
      "Next.js",
      "React",
      "Redux",
      "Node.js",
      "MongoDB",
      "SEO",
      "Responsive Design",
      "Payment Integration",
    ],
    icon: "FaSuitcaseRolling", // Using a travel icon
    category: "Sharing Economy Platform",
    images: [
      "/img/projects/kilo1.PNG",
      "/img/projects/kilo1.PNG",
      "/img/projects/kilo1.PNG",
    ],
    features: [
      "Traveler Matching System",
      "Kilo Sharing Calculator",
      "Secure Payment Gateway",
      "User Rating & Reviews",
      "Trip Planning Tools",
      "Real-Time Messaging",
      "Mobile-Optimized Design",
      "Multi-Currency Support",
      "Safety Verification System",
    ],
    liveUrl: "https://www.kilo-share.com",
  },
];

const ProjectSection = () => {
  const [currentImageIndices, setCurrentImageIndices] = useState(
    Array(projects.length).fill(0)
  );
  const [selectedProject, setSelectedProject] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  const router = useRouter();

  const nextImage = (projectIndex) => {
    setCurrentImageIndices((prev) => {
      const newIndices = [...prev];
      newIndices[projectIndex] =
        (newIndices[projectIndex] + 1) % projects[projectIndex].images.length;
      return newIndices;
    });
  };

  const prevImage = (projectIndex) => {
    setCurrentImageIndices((prev) => {
      const newIndices = [...prev];
      newIndices[projectIndex] =
        (newIndices[projectIndex] - 1 + projects[projectIndex].images.length) %
        projects[projectIndex].images.length;
      return newIndices;
    });
  };

  const openGallery = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  const navigateToContact = () => {
    router.push("/contact");
  };

  return (
    <Box py={16} bg="white" id="projects">
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" mb={16} textAlign="center" color="gray.800">
          Our{" "}
          <Box as="span" color="#DD6B20">
            Projects
          </Box>
        </Heading>

        <SimpleGrid columns={columns} spacing={8}>
          {projects.map((project, projectIndex) => (
            <Box
              key={projectIndex}
              borderRadius="xl"
              overflow="hidden"
              boxShadow="lg"
              borderWidth="1px"
              borderColor="gray.100"
              position="relative"
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "xl",
              }}
            >
              <Box position="relative">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={project.images[currentImageIndices[projectIndex]]}
                    alt={`${project.title} - ${
                      currentImageIndices[projectIndex] + 1
                    }`}
                    objectFit="cover"
                    cursor="pointer"
                    onClick={() => openGallery(project)}
                  />
                </AspectRatio>

                <Flex position="absolute" top="4" right="4" gap={2}>
                  <IconButton
                    aria-label="View project"
                    icon={<FaExternalLinkAlt />}
                    as="a"
                    href={project.liveUrl}
                    target="_blank"
                    size="sm"
                    borderRadius="full"
                    bg="whiteAlpha.800"
                    _hover={{ bg: "white" }}
                  />
                  <IconButton
                    aria-label="Expand gallery"
                    icon={<FaExpand />}
                    onClick={() => openGallery(project)}
                    size="sm"
                    borderRadius="full"
                    bg="whiteAlpha.800"
                    _hover={{ bg: "white" }}
                  />
                </Flex>

                <Flex
                  position="absolute"
                  bottom="4"
                  left="4"
                  right="4"
                  justify="space-between"
                >
                  <IconButton
                    aria-label="Previous image"
                    icon={<FaChevronLeft />}
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage(projectIndex);
                    }}
                    size="sm"
                    borderRadius="full"
                    bg="whiteAlpha.800"
                    _hover={{ bg: "white" }}
                  />
                  <IconButton
                    aria-label="Next image"
                    icon={<FaChevronRight />}
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage(projectIndex);
                    }}
                    size="sm"
                    borderRadius="full"
                    bg="whiteAlpha.800"
                    _hover={{ bg: "white" }}
                  />
                </Flex>

                <Flex
                  position="absolute"
                  bottom="2"
                  left="0"
                  right="0"
                  justify="center"
                  gap={1}
                >
                  {project.images.map((_, idx) => (
                    <Box
                      key={idx}
                      w="2"
                      h="2"
                      borderRadius="full"
                      bg={
                        idx === currentImageIndices[projectIndex]
                          ? "#DD6B20"
                          : "whiteAlpha.700"
                      }
                    />
                  ))}
                </Flex>
              </Box>

              <Box p={6}>
                <Flex align="center" justify="space-between" mb={3}>
                  <Flex align="center">
                    <Icon
                      as={project.icon}
                      w={5}
                      h={5}
                      color="#DD6B20"
                      mr={2}
                    />
                    <Text fontSize="sm" color="gray.500" fontWeight="medium">
                      {project.category}
                    </Text>
                  </Flex>
                  <Link
                    href={project.liveUrl}
                    isExternal
                    fontSize="sm"
                    color="#DD6B20"
                    fontWeight="medium"
                    display="flex"
                    alignItems="center"
                  >
                    View Live <Icon as={FaExternalLinkAlt} ml={1} />
                  </Link>
                </Flex>

                <Heading as="h3" size="lg" mb={3} color="gray.800">
                  {project.title}
                </Heading>

                <Text color="gray.600" mb={4}>
                  {project.description}
                </Text>

                <Flex wrap="wrap" gap={2} mb={4}>
                  {project.features.map((feature, i) => (
                    <Tag key={i} colorScheme="orange" variant="subtle">
                      {feature}
                    </Tag>
                  ))}
                </Flex>

                <Flex wrap="wrap" gap={2}>
                  {project.tags.map((tag, i) => (
                    <Tag key={i} colorScheme="gray">
                      {tag}
                    </Tag>
                  ))}
                </Flex>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        {/* Modal Gallery */}
        <Modal isOpen={isOpen} onClose={onClose} size="4xl">
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton
              zIndex={1}
              bg="whiteAlpha.800"
              _hover={{ bg: "white" }}
            />
            {selectedProject && (
              <Box position="relative">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={selectedProject.images[0]}
                    alt={selectedProject.title}
                    objectFit="contain"
                  />
                </AspectRatio>
                <Flex
                  position="absolute"
                  bottom="4"
                  left="0"
                  right="0"
                  justify="center"
                  gap={2}
                >
                  {selectedProject.images.map((_, idx) => (
                    <Box
                      key={idx}
                      w="3"
                      h="3"
                      borderRadius="full"
                      bg={idx === 0 ? "#DD6B20" : "whiteAlpha.700"}
                      border="1px solid"
                      borderColor="whiteAlpha.800"
                    />
                  ))}
                </Flex>
              </Box>
            )}
          </ModalContent>
        </Modal>

        <Flex justify="center" mt={16}>
          <Button
            bg="#DD6B20"
            color="white"
            size="lg"
            px={8}
            _hover={{
              bg: "orange.600",
              transform: "translateY(-2px)",
              boxShadow: "md",
            }}
            onClick={navigateToContact}
          >
            Work With Us
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default ProjectSection;

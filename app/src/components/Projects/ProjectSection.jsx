"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  Tag,
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
  VStack,
  HStack,
  Badge,
  Wrap,
  WrapItem,
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
  FaBroom,
  FaSuitcaseRolling,
  FaShoppingCart,
  FaHeart,
  FaRobot,
  FaMosque,
  FaClipboardList,
} from "react-icons/fa";
import { useTranslation } from "@/hooks/useTranslation";
import AnimatedSection from "../Partials/AnimatedSection";
import StaggeredContainer from "../Partials/StaggeredContainer";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const getProjects = (t) => [
  {
    key: "m2adoc",
    title: t('projects.projects.m2adoc.title'),
    description: t('projects.projects.m2adoc.description'),
    tags: ["Next.js", "React", "AI/ML", "OpenAI", "Node.js", "MongoDB", "Speech-to-Text", "Healthcare", "PIPEDA"],
    icon: FaRobot,
    category: t('projects.projects.m2adoc.category'),
    images: [
      "/img/projects/m2adoc1.png",
      "/img/projects/m2adoc2.png",
      "/img/projects/m2adoc3.png",
    ],
    features: t('projects.projects.m2adoc.features'),
    liveUrl: "https://m2adoc.com",
  },
  {
    key: "timetopray",
    title: t('projects.projects.timetopray.title'),
    description: t('projects.projects.timetopray.description'),
    tags: ["React Native", "Next.js", "PWA", "GPS API", "Push Notifications", "Offline Mode", "Gamification"],
    icon: FaMosque,
    category: t('projects.projects.timetopray.category'),
    images: [
      "/img/projects/timetopray1.png",
      "/img/projects/timetopray2.png",
      "/img/projects/timetopray3.png",
    ],
    features: t('projects.projects.timetopray.features'),
    liveUrl: "https://timetopray.app",
  },
  {
    key: "crmDioCleaning",
    title: t('projects.projects.crmDioCleaning.title'),
    description: t('projects.projects.crmDioCleaning.description'),
    tags: ["Next.js", "React", "Node.js", "MongoDB", "CRM", "Business Management", "Real-time", "Dashboard"],
    icon: FaClipboardList,
    category: t('projects.projects.crmDioCleaning.category'),
    images: [
      "/img/projects/crmdiocleaning1.png",
      "/img/projects/crmdiocleaning2.png",
      "/img/projects/crmdiocleaning3.png",
    ],
    features: t('projects.projects.crmDioCleaning.features'),
    liveUrl: "https://crmdiocleaning.com",
  },
  {
    key: "mastaBarber",
    title: t('projects.projects.mastaBarber.title'),
    description: t('projects.projects.mastaBarber.description'),
    tags: ["Flutter", "Dart", "Mobile App", "React", "JavaScript", "Booking System", "Payment Integration", "Push Notifications"],
    icon: FaCut,
    category: t('projects.projects.mastaBarber.category'),
    images: [
      "/img/projects/mastababer1.png",
      "/img/projects/mastababer2.png",
      "/img/projects/mastababer3.png",
    ],
    features: t('projects.projects.mastaBarber.features'),
    liveUrl: "https://mastabarber.com/",
  },
  {
    key: "kaneEco",
    title: t('projects.projects.kaneEco.title'),
    description: t('projects.projects.kaneEco.description'),
    tags: ["PHP", "JavaScript", "HTML", "CSS", "Bootstrap", "SEO"],
    icon: FaGlobe,
    category: t('projects.projects.kaneEco.category'),
    images: [
      "/img/projects/kane1.PNG",
      "/img/projects/kane2.PNG",
      "/img/projects/kane3.PNG",
    ],
    features: t('projects.projects.kaneEco.features'),
    liveUrl: "https://kane-eco-construction.com",
  },
  {
    key: "trioPro",
    title: t('projects.projects.trioPro.title'),
    description: t('projects.projects.trioPro.description'),
    tags: [
      "Next.js",
      "React",
      "Redux",
      "PHP",
      "MySQL",
      "SEO",
      "Responsive Design",
    ],
    icon: FaTruckMoving,
    category: t('projects.projects.trioPro.category'),
    images: [
      "/img/projects/trio1.PNG",
      "/img/projects/trio2.PNG",
      "/img/projects/trio3.PNG",
    ],
    features: t('projects.projects.trioPro.features'),
    liveUrl: "https://www.triopromovecleanservice.com/",
  },
  {
    key: "zaiqaEats",
    title: t('projects.projects.zaiqaEats.title'),
    description: t('projects.projects.zaiqaEats.description'),
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
    icon: FaUtensils,
    category: t('projects.projects.zaiqaEats.category'),
    images: [
      "/img/projects/zaiqaeats1.PNG",
      "/img/projects/zaiqaeats2.PNG",
      "/img/projects/zaiqaeats3.PNG",
    ],
    features: t('projects.projects.zaiqaEats.features'),
    liveUrl: "https://www.zaiqaeats.com",
  },
  {
    key: "maeloStudio",
    title: t('projects.projects.maeloStudio.title'),
    description: t('projects.projects.maeloStudio.description'),
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
    icon: FaMusic,
    category: t('projects.projects.maeloStudio.category'),
    images: [
      "/img/projects/maelo1.PNG",
      "/img/projects/maelo2.PNG",
      "/img/projects/maelo3.PNG",
    ],
    features: t('projects.projects.maeloStudio.features'),
    liveUrl: "https://www.maelostudio.com/",
  },
  {
    key: "kiloShare",
    title: t('projects.projects.kiloShare.title'),
    description: t('projects.projects.kiloShare.description'),
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
    icon: FaSuitcaseRolling,
    category: t('projects.projects.kiloShare.category'),
    images: [
      "/img/projects/kilo1.PNG",
      "/img/projects/kilo1.PNG",
      "/img/projects/kilo1.PNG",
    ],
    features: t('projects.projects.kiloShare.features'),
    liveUrl: "https://www.kilo-share.com",
  },
  {
    key: "trydioCleaning",
    title: t('projects.projects.trydioCleaning.title'),
    description: t('projects.projects.trydioCleaning.description'),
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "SEO",
      "Responsive Design",
      "CSS Animation",
      "Form Submission",
      "Google Maps Integration",
    ],
    icon: FaBroom,
    category: t('projects.projects.trydioCleaning.category'),
    images: [
      "/img/projects/trydio1.png",
      "/img/projects/trydio2.png",
      "/img/projects/trydio3.png",
    ],
    features: t('projects.projects.trydioCleaning.features'),
    liveUrl: "https://www.trydiocleaning.com",
  },
  {
    key: "epilist",
    title: t('projects.projects.epilist.title'),
    description: t('projects.projects.epilist.description'),
    tags: [
      "React Native",
      "Next.js",
      "React",
      "Node.js",
      "Real-time Sync",
      "Mobile Apps",
      "Progressive Web App",
      "Cross-platform",
      "Offline Mode",
    ],
    icon: FaShoppingCart,
    category: t('projects.projects.epilist.category'),
    images: [
      "/img/projects/epilist1.png",
      "/img/projects/epilist2.png",
      "/img/projects/epilist3.png",
    ],
    features: t('projects.projects.epilist.features'),
    liveUrl: "https://epilist.app",
  },
  {
    key: "opten",
    title: t('projects.projects.opten.title'),
    description: t('projects.projects.opten.description'),
    tags: [
      "Next.js",
      "Tailwind CSS",
      "React",
      "SEO Optimization",
      "Responsive Design",
      "Multilingual",
      "NGO Platform",
      "Impact Tracking",
      "Social Impact",
    ],
    icon: FaHeart,
    category: t('projects.projects.opten.category'),
    images: [
      "/img/projects/opten1.png",
      "/img/projects/opten2.png",
      "/img/projects/opten3.png",
    ],
    features: t('projects.projects.opten.features'),
    liveUrl: "https://ongopten.com",
  },
];

const ProjectSection = () => {
  const { t } = useTranslation();
  const projects = getProjects(t);
  
  const [currentImageIndices, setCurrentImageIndices] = useState(
    Array(projects.length).fill(0)
  );
  
  const buttonVariants = {
    hover: {
      y: -3,
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  const router = useRouter();

  const nextImage = (projectIndex, e) => {
    e?.stopPropagation();
    setCurrentImageIndices((prev) => {
      const newIndices = [...prev];
      newIndices[projectIndex] =
        (newIndices[projectIndex] + 1) % projects[projectIndex].images.length;
      return newIndices;
    });
  };

  const prevImage = (projectIndex, e) => {
    e?.stopPropagation();
    setCurrentImageIndices((prev) => {
      const newIndices = [...prev];
      newIndices[projectIndex] =
        (newIndices[projectIndex] - 1 + projects[projectIndex].images.length) %
        projects[projectIndex].images.length;
      return newIndices;
    });
  };

  const openGallery = (project, imageIndex = 0) => {
    setSelectedProject(project);
    setSelectedImageIndex(imageIndex);
    onOpen();
  };

  const closeGallery = () => {
    onClose();
    setSelectedProject(null);
  };

  const nextModalImage = () => {
    if (selectedProject) {
      setSelectedImageIndex(
        (prev) => (prev + 1) % selectedProject.images.length
      );
    }
  };

  const prevModalImage = () => {
    if (selectedProject) {
      setSelectedImageIndex(
        (prev) =>
          (prev - 1 + selectedProject.images.length) %
          selectedProject.images.length
      );
    }
  };

  const navigateToContact = () => {
    router.push("/contact");
  };

  return (
    <Box
      py={20}
      bgGradient="linear(to-br, gray.50, white)"
      id="projects"
      minH="100vh"
    >
      <Container maxW="container.xl">
        <AnimatedSection distance={50} delay={0.1}>
          <VStack spacing={8} mb={16}>
          <Heading
            as="h1"
            size="2xl"
            textAlign="center"
            color="gray.800"
            fontSize={{ base: "3xl", md: "5xl" }}
          >
            {t('projects.title')}{" "}
            <Box
              as="span"
              bgGradient="linear(to-r, orange.400, orange.600)"
              bgClip="text"
            >
              {t('projects.titleHighlight')}
            </Box>
          </Heading>
          <Text fontSize="xl" color="gray.600" textAlign="center" maxW="3xl">
            {t('projects.subtitle')}
          </Text>
          </VStack>
        </AnimatedSection>

        <StaggeredContainer staggerDelay={0.1}>
          <SimpleGrid columns={columns} spacing={8}>
          {projects.map((project, projectIndex) => (
            <AnimatedSection key={projectIndex} distance={30} delay={projectIndex * 0.1}>
              <MotionBox
              key={projectIndex}
              bg="white"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="lg"
              borderWidth="1px"
              borderColor="gray.100"
              position="relative"
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: "2xl",
                borderColor: "orange.200",
              }}
              role="group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Box position="relative" overflow="hidden">
                <AspectRatio ratio={16 / 9}>
                  <Box position="relative" bg="gray.100">
                    <Image
                      src={project.images[currentImageIndices[projectIndex]]}
                      alt={`${project.title} - Image ${
                        currentImageIndices[projectIndex] + 1
                      }`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={projectIndex < 3}
                    />
                  </Box>
                </AspectRatio>

                {/* Overlay avec contrôles */}
                <Box
                  position="absolute"
                  inset="0"
                  bg="blackAlpha.600"
                  opacity="0"
                  _groupHover={{ opacity: 1 }}
                  transition="opacity 0.3s"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <HStack spacing={3}>
                    <IconButton
                      aria-label={`${t('projects.imageOf')} ${project.title}`}
                      icon={<Icon as={FaExpand} />}
                      onClick={() =>
                        openGallery(project, currentImageIndices[projectIndex])
                      }
                      size="lg"
                      borderRadius="full"
                      bg="whiteAlpha.900"
                      _hover={{ bg: "white", transform: "scale(1.1)" }}
                      transition="all 0.2s"
                    />
                    <IconButton
                      aria-label={t('projects.viewLive')}
                      icon={<Icon as={FaExternalLinkAlt} />}
                      as="a"
                      href={project.liveUrl}
                      target="_blank"
                      size="lg"
                      borderRadius="full"
                      bg="orange.500"
                      color="white"
                      _hover={{ bg: "orange.600", transform: "scale(1.1)" }}
                      transition="all 0.2s"
                    />
                  </HStack>
                </Box>

                {/* Navigation images */}
                <Flex
                  position="absolute"
                  bottom="4"
                  left="4"
                  right="4"
                  justify="space-between"
                >
                  <IconButton
                    aria-label="Previous image"
                    icon={<Icon as={FaChevronLeft} />}
                    onClick={(e) => prevImage(projectIndex, e)}
                    size="sm"
                    borderRadius="full"
                    bg="whiteAlpha.800"
                    _hover={{ bg: "white", transform: "scale(1.1)" }}
                    transition="all 0.2s"
                  />
                  <IconButton
                    aria-label="Next image"
                    icon={<Icon as={FaChevronRight} />}
                    onClick={(e) => nextImage(projectIndex, e)}
                    size="sm"
                    borderRadius="full"
                    bg="whiteAlpha.800"
                    _hover={{ bg: "white", transform: "scale(1.1)" }}
                    transition="all 0.2s"
                  />
                </Flex>

                {/* Indicateurs */}
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
                      w={idx === currentImageIndices[projectIndex] ? "6" : "2"}
                      h="2"
                      borderRadius="full"
                      bg={
                        idx === currentImageIndices[projectIndex]
                          ? "orange.500"
                          : "whiteAlpha.700"
                      }
                      transition="all 0.2s"
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
                      color="orange.500"
                      mr={2}
                    />
                    <Text fontSize="sm" color="gray.500" fontWeight="medium">
                      {t('projects.category')}: {project.category}
                    </Text>
                  </Flex>
                  <Link
                    href={project.liveUrl}
                    isExternal
                    fontSize="sm"
                    color="orange.500"
                    fontWeight="medium"
                    display="flex"
                    alignItems="center"
                    _hover={{ color: "orange.600" }}
                    transition="color 0.2s"
                  >
                    {t('projects.viewLive')} <Icon as={FaExternalLinkAlt} ml={1} />
                  </Link>
                </Flex>

                <Heading
                  as="h3"
                  size="lg"
                  mb={3}
                  color="gray.800"
                  _groupHover={{ color: "orange.600" }}
                  transition="color 0.2s"
                >
                  {project.title}
                </Heading>

                <Text color="gray.600" mb={4} noOfLines={3}>
                  {project.description}
                </Text>

                <Wrap spacing={2} mb={4}>
                  {project.features.slice(0, 3).map((feature, i) => (
                    <WrapItem key={i}>
                      <Tag
                        size="sm"
                        colorScheme="orange"
                        variant="subtle"
                        borderRadius="full"
                      >
                        {feature}
                      </Tag>
                    </WrapItem>
                  ))}
                  {project.features.length > 3 && (
                    <WrapItem>
                      <Badge
                        colorScheme="gray"
                        borderRadius="full"
                        px={2}
                        py={1}
                        fontSize="xs"
                      >
                        +{project.features.length - 3} more
                      </Badge>
                    </WrapItem>
                  )}
                </Wrap>

                <Wrap spacing={2}>
                  {project.tags.map((tag, i) => (
                    <WrapItem key={i}>
                      <Tag
                        size="sm"
                        colorScheme="gray"
                        variant="solid"
                        borderRadius="md"
                        _hover={{ bg: "gray.300" }}
                        transition="background 0.2s"
                      >
                        {tag}
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            </MotionBox>
            </AnimatedSection>
          ))}
          </SimpleGrid>
        </StaggeredContainer>

        {/* Modal Gallery */}
        <Modal isOpen={isOpen} onClose={closeGallery} size="6xl" isCentered>
          <ModalOverlay bg="blackAlpha.800" />
          <ModalContent bg="transparent" boxShadow="none" maxH="90vh">
            <ModalCloseButton
              position="absolute"
              top="4"
              right="4"
              zIndex={1}
              bg="whiteAlpha.200"
              color="white"
              _hover={{ bg: "whiteAlpha.300" }}
              size="lg"
            />
            {selectedProject && (
              <VStack spacing={4}>
                <Box position="relative" w="full">
                  <AspectRatio ratio={16 / 9} w="full">
                    <Box bg="gray.900" borderRadius="lg" overflow="hidden">
                      <Image
                        src={selectedProject.images[selectedImageIndex]}
                        alt={`${selectedProject.title} - Image ${
                          selectedImageIndex + 1
                        }`}
                        fill
                        style={{ objectFit: "contain" }}
                        sizes="90vw"
                      />
                    </Box>
                  </AspectRatio>

                  {selectedProject.images.length > 1 && (
                    <>
                      <IconButton
                        aria-label={t('projects.imageOf')}
                        icon={<Icon as={FaChevronLeft} />}
                        onClick={prevModalImage}
                        position="absolute"
                        left="4"
                        top="50%"
                        transform="translateY(-50%)"
                        size="lg"
                        borderRadius="full"
                        bg="whiteAlpha.200"
                        color="white"
                        _hover={{ bg: "whiteAlpha.300" }}
                      />
                      <IconButton
                        aria-label={t('projects.imageOf')}
                        icon={<Icon as={FaChevronRight} />}
                        onClick={nextModalImage}
                        position="absolute"
                        right="4"
                        top="50%"
                        transform="translateY(-50%)"
                        size="lg"
                        borderRadius="full"
                        bg="whiteAlpha.200"
                        color="white"
                        _hover={{ bg: "whiteAlpha.300" }}
                      />
                    </>
                  )}
                </Box>

                <HStack spacing={2}>
                  {selectedProject.images.map((_, idx) => (
                    <Box
                      key={idx}
                      as="button"
                      onClick={() => setSelectedImageIndex(idx)}
                      w={idx === selectedImageIndex ? "8" : "3"}
                      h="3"
                      borderRadius="full"
                      bg={
                        idx === selectedImageIndex
                          ? "orange.500"
                          : "whiteAlpha.500"
                      }
                      _hover={{
                        bg:
                          idx === selectedImageIndex
                            ? "orange.600"
                            : "whiteAlpha.700",
                      }}
                      transition="all 0.2s"
                    />
                  ))}
                </HStack>

                <VStack spacing={2} textAlign="center">
                  <Heading size="lg" color="white">
                    {selectedProject.title}
                  </Heading>
                  <Text color="gray.300">
                    {selectedImageIndex + 1} / {selectedProject.images.length}
                  </Text>
                </VStack>
              </VStack>
            )}
          </ModalContent>
        </Modal>

        <AnimatedSection distance={30} delay={0.5}>
          <Flex justify="center" mt={16}>
          <MotionButton
            bgGradient="linear(to-r, orange.500, orange.600)"
            color="white"
            size="lg"
            px={8}
            py={6}
            fontSize="lg"
            fontWeight="bold"
            borderRadius="xl"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            _hover={{
              bgGradient: "linear(to-r, orange.600, orange.700)",
              boxShadow: "0 8px 25px rgba(221, 107, 32, 0.3)",
            }}
            transition="all 0.3s ease"
            onClick={navigateToContact}
          >
            {t('projects.workWithUs')}
          </MotionButton>
          </Flex>
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default ProjectSection;

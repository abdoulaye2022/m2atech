"use client";

import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, Button, Link, Badge } from '@chakra-ui/react';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaDollarSign, FaCalendarAlt, FaHome, FaGlobe, FaLock } from 'react-icons/fa';
import { useTranslation } from '@/hooks/useTranslation';

// Helper function to calculate days remaining and job status
const getJobStatus = (deadlineDate) => {
  const now = new Date();
  now.setHours(0, 0, 0, 0); // Reset to start of day

  const deadline = new Date(deadlineDate);
  deadline.setHours(23, 59, 59, 999); // End of deadline day

  const timeDiff = deadline.getTime() - now.getTime();
  const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return {
    daysRemaining,
    isClosed: daysRemaining <= 0,
    isUrgent: daysRemaining > 0 && daysRemaining <= 3
  };
};

const Jobs = () => {
  const { t, language } = useTranslation();

  const jobOpenings = [
    {
      id: 1,
      title: t('jobs.openings.marketingAssistant.title'),
      department: t('jobs.openings.marketingAssistant.department'),
      type: t('jobs.openings.marketingAssistant.type'),
      workMode: t('jobs.openings.marketingAssistant.workMode'),
      location: t('jobs.openings.marketingAssistant.location'),
      hours: t('jobs.openings.marketingAssistant.hours'),
      salary: "50 000 - 80 000 FCFA",
      deadline: "2026-01-23", // Date limite: vendredi 23 janvier 2026
      shortDescription: t('jobs.openings.marketingAssistant.shortDescription'),
      skills: ["LinkedIn", "Facebook", "Instagram", "Canva", "CRM"],
      applyUrl: "https://www.m2acrm.com/careers/ac323989-eb09-4d72-b427-8933bc7cc442"
    }
  ];

  // Get status for each job
  const getStatusLabel = (job) => {
    const status = getJobStatus(job.deadline);
    if (status.isClosed) {
      return {
        label: language === 'fr' ? 'Fermé' : 'Closed',
        colorScheme: 'gray',
        isClosed: true
      };
    }
    if (status.isUrgent) {
      return {
        label: language === 'fr' ? `${status.daysRemaining} jour${status.daysRemaining > 1 ? 's' : ''} restant${status.daysRemaining > 1 ? 's' : ''}` : `${status.daysRemaining} day${status.daysRemaining > 1 ? 's' : ''} left`,
        colorScheme: 'red',
        isClosed: false
      };
    }
    return {
      label: language === 'fr' ? `${status.daysRemaining} jours restants` : `${status.daysRemaining} days left`,
      colorScheme: 'orange',
      isClosed: false
    };
  };

  return (
    <Box py={16} bg="white" id="jobs">
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" mb={16} textAlign="center" color="gray.800">
          {t('jobs.pageTitle')}{" "}
          <Box as="span" color="#DD6B20">
            {t('jobs.pageTitleHighlight')}
          </Box>
        </Heading>

        <Text fontSize="xl" textAlign="center" color="gray.600" mb={16} maxW="2xl" mx="auto">
          {t('jobs.subtitle')}
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mb={16}>
          {jobOpenings.map((job) => {
            const status = getStatusLabel(job);

            return (
              <Box
                key={job.id}
                borderWidth="1px"
                borderRadius="xl"
                borderColor={status.isClosed ? "gray.300" : "gray.200"}
                p={6}
                transition="all 0.3s"
                _hover={status.isClosed ? {} : {
                  transform: 'translateY(-5px)',
                  boxShadow: 'xl',
                  borderColor: '#DD6B20'
                }}
                bg={status.isClosed ? "gray.50" : "white"}
                cursor={status.isClosed ? "not-allowed" : "pointer"}
                opacity={status.isClosed ? 0.7 : 1}
                onClick={() => !status.isClosed && window.open(job.applyUrl, '_blank')}
                position="relative"
              >
                {/* Closed Overlay */}
                {status.isClosed && (
                  <Box
                    position="absolute"
                    top={4}
                    right={4}
                    bg="gray.700"
                    color="white"
                    px={3}
                    py={1}
                    borderRadius="md"
                    fontSize="sm"
                    fontWeight="bold"
                    display="flex"
                    alignItems="center"
                    gap={1}
                  >
                    <Icon as={FaLock} boxSize={3} />
                    {status.label}
                  </Box>
                )}

                {/* Header */}
                <Flex justify="space-between" align="flex-start" mb={3} flexWrap="wrap" gap={2}>
                  <Badge colorScheme="purple" variant="subtle" px={3} py={1} borderRadius="full" fontSize="xs">
                    {job.department}
                  </Badge>
                  {!status.isClosed && (
                    <Badge colorScheme={status.colorScheme} variant="solid" px={3} py={1} borderRadius="full" fontSize="xs">
                      <Icon as={FaCalendarAlt} mr={1} />
                      {status.label}
                    </Badge>
                  )}
                </Flex>

                {/* Title */}
                <Heading as="h3" size="md" color={status.isClosed ? "gray.500" : "gray.800"} mb={3}>
                  {job.title}
                </Heading>

                {/* Tags */}
                <Flex gap={2} mb={4} flexWrap="wrap">
                  <Badge colorScheme={status.isClosed ? "gray" : "orange"} variant="solid" px={2} py={1} borderRadius="full" fontSize="xs">
                    {job.type}
                  </Badge>
                  <Badge colorScheme={status.isClosed ? "gray" : "green"} variant="solid" px={2} py={1} borderRadius="full" fontSize="xs">
                    <Icon as={FaHome} mr={1} />
                    {job.workMode}
                  </Badge>
                </Flex>

                {/* Key Info */}
                <Flex direction="column" gap={2} mb={4}>
                  <Flex align="center">
                    <Icon as={FaMapMarkerAlt} color={status.isClosed ? "gray.400" : "#DD6B20"} mr={2} boxSize={3} />
                    <Text fontSize="sm" color="gray.600">{job.location}</Text>
                  </Flex>
                  <Flex align="center">
                    <Icon as={FaClock} color={status.isClosed ? "gray.400" : "#DD6B20"} mr={2} boxSize={3} />
                    <Text fontSize="sm" color="gray.600">{job.hours}</Text>
                  </Flex>
                  <Flex align="center">
                    <Icon as={FaDollarSign} color={status.isClosed ? "gray.400" : "#DD6B20"} mr={2} boxSize={3} />
                    <Text fontSize="sm" color={status.isClosed ? "gray.500" : "gray.800"} fontWeight="bold">{job.salary}/mois</Text>
                  </Flex>
                </Flex>

                {/* Short Description */}
                <Text fontSize="sm" color="gray.600" mb={4} noOfLines={3}>
                  {job.shortDescription}
                </Text>

                {/* Skills */}
                <Flex wrap="wrap" gap={1} mb={5}>
                  {job.skills.slice(0, 4).map((skill, index) => (
                    <Badge key={index} colorScheme="gray" variant="subtle" px={2} py={1} borderRadius="md" fontSize="xs">
                      {skill}
                    </Badge>
                  ))}
                  {job.skills.length > 4 && (
                    <Badge colorScheme="gray" variant="outline" px={2} py={1} borderRadius="md" fontSize="xs">
                      +{job.skills.length - 4}
                    </Badge>
                  )}
                </Flex>

                {/* Apply Button */}
                <Button
                  as={status.isClosed ? Button : Link}
                  href={status.isClosed ? undefined : job.applyUrl}
                  target={status.isClosed ? undefined : "_blank"}
                  bg={status.isClosed ? "gray.400" : "#DD6B20"}
                  color="white"
                  size="md"
                  width="full"
                  isDisabled={status.isClosed}
                  _hover={status.isClosed ? {} : {
                    bg: "orange.600",
                    textDecoration: "none"
                  }}
                  rightIcon={status.isClosed ? <FaLock /> : <FaGlobe />}
                  onClick={(e) => e.stopPropagation()}
                >
                  {status.isClosed ? t('jobs.closed') : t('jobs.viewDetails')}
                </Button>
              </Box>
            );
          })}
        </SimpleGrid>

        <Box textAlign="center" mt={16}>
          <Text fontSize="lg" color="gray.600" mb={4}>
            {t('jobs.noJobsMessage')}
          </Text>
          <Button
            as={Link}
            href="/contact"
            size="lg"
            colorScheme="orange"
            rightIcon={<FaBriefcase />}
          >
            {t('jobs.submitApplication')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Jobs;

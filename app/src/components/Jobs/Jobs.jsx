"use client";

import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, Button, Link, Badge } from '@chakra-ui/react';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaDollarSign } from 'react-icons/fa';

const Jobs = () => {
  const jobOpenings = [
    // {
    //   id: 1,
    //   title: "Frontend Developer",
    //   type: "Full-time",
    //   location: "Remote",
    //   salary: "$80,000 - $100,000",
    //   description: "We're looking for an experienced React developer to join our team and build amazing user interfaces.",
    //   skills: ["React", "Next.js", "TypeScript", "Chakra UI"],
    //   posted: "2 days ago"
    // }
  ];

  return (
    <Box py={16} bg="white" id="jobs">
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" mb={16} textAlign="center" color="gray.800">
          Career{" "}
          <Box as="span" color="#DD6B20">
            Opportunities
          </Box>
        </Heading>

        <Text fontSize="xl" textAlign="center" color="gray.600" mb={16} maxW="2xl" mx="auto">
          Join our team and help build innovative digital solutions for clients around the world.
        </Text>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} mb={16}>
          {jobOpenings.map((job) => (
            <Box
              key={job.id}
              borderWidth="1px"
              borderRadius="xl"
              borderColor="gray.200"
              p={8}
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: 'lg',
                borderColor: '#DD6B20'
              }}
            >
              <Flex justify="space-between" align="flex-start" mb={4}>
                <Heading as="h3" size="lg" color="gray.800">
                  {job.title}
                </Heading>
                <Badge colorScheme="orange" variant="solid" px={3} py={1} borderRadius="full">
                  {job.type}
                </Badge>
              </Flex>

              <Flex align="center" mb={6} gap={4} flexWrap="wrap">
                <Flex align="center">
                  <Icon as={FaMapMarkerAlt} color="#DD6B20" mr={2} />
                  <Text>{job.location}</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={FaDollarSign} color="#DD6B20" mr={2} />
                  <Text>{job.salary}</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={FaClock} color="#DD6B20" mr={2} />
                  <Text>{job.posted}</Text>
                </Flex>
              </Flex>

              <Text color="gray.600" mb={6}>
                {job.description}
              </Text>

              <Flex wrap="wrap" gap={2} mb={6}>
                {job.skills.map((skill, index) => (
                  <Badge key={index} colorScheme="gray" px={3} py={1} borderRadius="full">
                    {skill}
                  </Badge>
                ))}
              </Flex>

              <Button
                as={Link}
                href="#apply"
                bg="#DD6B20"
                color="white"
                _hover={{
                  bg: "orange.600",
                  textDecoration: "none"
                }}
              >
                Apply Now
              </Button>
            </Box>
          ))}
        </SimpleGrid>

        <Box textAlign="center" mt={16}>
          <Text fontSize="lg" color="gray.600" mb={4}>
            Don't see your dream job? Send us your resume anyway!
          </Text>
          <Button
            as={Link}
            href="/contact"
            size="lg"
            colorScheme="orange"
            rightIcon={<FaBriefcase />}
          >
            Submit General Application
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Jobs;
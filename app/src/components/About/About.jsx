"use client";

import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, Image, useBreakpointValue, Button } from '@chakra-ui/react';
import { FaRocket, FaUsers, FaLightbulb, FaHandshake, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from '@/hooks/useTranslation';

const About = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { t } = useTranslation();

  const stats = [
    { value: "6+", label: t('about.stats.projectsDelivered') },
    { value: "4+", label: t('about.stats.satisfiedClients') },
    { value: "100%", label: t('about.stats.clientRetention') },
    { value: t('about.stats.location'), label: t('about.stats.basedIn'), icon: FaMapMarkerAlt }
  ];

  const values = [
    {
      icon: FaRocket,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    },
    {
      icon: FaUsers,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description')
    },
    {
      icon: FaLightbulb,
      title: t('about.values.creativity.title'),
      description: t('about.values.creativity.description')
    },
    {
      icon: FaHandshake,
      title: t('about.values.integrity.title'),
      description: t('about.values.integrity.description')
    }
  ];

  return (
    <Box py={16} bg="white" id="about">
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" mb={16} textAlign="center" color="gray.800">
          {t('about.pageTitle')} <Box as="span" color="#DD6B20">{t('about.pageTitleHighlight')}</Box>
        </Heading>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={12} align="center" mb={16}>
          <Box flex={1}>
            <Heading as="h2" size="xl" mb={6} color="gray.800">
              {t('about.story.title')}
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={4}>
              {t('about.story.description1')}
            </Text>
            <Text fontSize="lg" color="gray.600">
              {t('about.story.description2')}
            </Text>
          </Box>

          {isDesktop && (
            <Box flex={1}>
              <Image
                src="/img/about1.png"
                alt={t('about.teamAlt')}
                borderRadius="2xl"
                boxShadow="lg"
              />
            </Box>
          )}
        </Flex>

        <Box bg="orange.50" p={8} borderRadius="2xl" mb={16}>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} textAlign="center">
            {stats.map((stat, index) => (
              <Box key={index}>
                <Text fontSize="3xl" fontWeight="bold" color="#DD6B20">
                  {stat.value}
                  {stat.icon && <Icon as={stat.icon} ml={2} verticalAlign="middle" />}
                </Text>
                <Text color="gray.600">{stat.label}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Heading as="h2" size="xl" mb={12} textAlign="center" color="gray.800">
          {t('about.values.title')} <Box as="span" color="#DD6B20">{t('about.values.titleHighlight')}</Box>
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mb={16}>
          {values.map((value, index) => (
            <Box
              key={index}
              textAlign="center"
              p={6}
              borderRadius="xl"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: 'md'
              }}
            >
              <Icon as={value.icon} w={10} h={10} color="#DD6B20" mb={4} mx="auto" />
              <Heading as="h3" size="md" mb={3} color="gray.800">
                {value.title}
              </Heading>
              <Text color="gray.600">{value.description}</Text>
            </Box>
          ))}
        </SimpleGrid>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={12} align="center">
          {isDesktop && (
            <Box flex={1}>
              <Image
                src="/img/mission.png"
                alt={t('about.missionAlt')}
                borderRadius="2xl"
                boxShadow="lg"
              />
            </Box>
          )}
          <Box flex={1}>
            <Heading as="h2" size="xl" mb={6} color="gray.800">
              {t('about.mission.title')}
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={4}>
              {t('about.mission.description1')}
            </Text>
            <Text fontSize="lg" color="gray.600" mb={4}>
              {t('about.mission.description2')}
            </Text>
            <Button
              colorScheme="orange"
              size="lg"
              mt={4}
              as="a"
              href="/contact"
            >
              {t('about.mission.cta')}
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;

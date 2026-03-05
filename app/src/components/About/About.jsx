"use client";

import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, Image, useBreakpointValue, Button } from '@chakra-ui/react';
import { FaRocket, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa';
import { useTranslation } from '@/hooks/useTranslation';

const About = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { t } = useTranslation();

  const stats = [
    { value: "10+", label: t('about.stats.projectsCompleted') },
    { value: "98%", label: t('about.stats.clientSatisfaction') },
    { value: "24/7", label: t('about.stats.support') },
    { value: "5+", label: t('about.stats.yearsExperience') }
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
    <Box py={16} bg="var(--color-bg-primary)" id="about">
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" mb={16} textAlign="center" color="var(--color-text-primary)" fontFamily="var(--font-display)">
          {t('about.pageTitle')} <Box as="span" className="gradient-text">{t('about.pageTitleHighlight')}</Box>
        </Heading>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={12} align="center" mb={16}>
          <Box flex={1}>
            <Heading as="h2" size="xl" mb={6} color="var(--color-text-primary)" fontFamily="var(--font-display)">
              {t('about.story.title')}
            </Heading>
            <Text fontSize="lg" color="var(--color-text-secondary)" mb={4}>
              {t('about.story.description1')}
            </Text>
            <Text fontSize="lg" color="var(--color-text-secondary)">
              {t('about.story.description2')}
            </Text>
          </Box>

          {isDesktop && (
            <Box flex={1}>
              <Image
                src="/img/about1.png"
                alt={t('about.teamAlt')}
                borderRadius="2xl"
              />
            </Box>
          )}
        </Flex>

        <Box bg="rgba(255, 93, 34, 0.1)" p={8} borderRadius="2xl" mb={16} border="1px solid" borderColor="var(--color-border)">
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} textAlign="center">
            {stats.map((stat, index) => (
              <Box key={index}>
                <Text fontSize="3xl" fontWeight="bold" color="#ff5d22">
                  {stat.value}
                </Text>
                <Text color="var(--color-text-secondary)">{stat.label}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Heading as="h2" size="xl" mb={12} textAlign="center" color="var(--color-text-primary)" fontFamily="var(--font-display)">
          {t('about.values.title')} <Box as="span" className="gradient-text">{t('about.values.titleHighlight')}</Box>
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mb={16}>
          {values.map((value, index) => (
            <Box
              key={index}
              textAlign="center"
              p={6}
              borderRadius="xl"
              transition="all 0.3s"
              bg="white"
              boxShadow="0 2px 20px rgba(0,0,0,0.06)"
              border="1px solid"
              borderColor="var(--color-border)"
              _hover={{
                transform: 'translateY(-5px)',
                borderColor: 'var(--color-border-hover)'
              }}
            >
              <Icon as={value.icon} w={10} h={10} color="#ff5d22" mb={4} mx="auto" />
              <Heading as="h3" size="md" mb={3} color="var(--color-text-primary)" fontFamily="var(--font-display)">
                {value.title}
              </Heading>
              <Text color="var(--color-text-secondary)">{value.description}</Text>
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
              />
            </Box>
          )}
          <Box flex={1}>
            <Heading as="h2" size="xl" mb={6} color="var(--color-text-primary)" fontFamily="var(--font-display)">
              {t('about.mission.title')}
            </Heading>
            <Text fontSize="lg" color="var(--color-text-secondary)" mb={4}>
              {t('about.mission.description1')}
            </Text>
            <Text fontSize="lg" color="var(--color-text-secondary)" mb={4}>
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

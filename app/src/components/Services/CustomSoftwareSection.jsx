"use client";

import React from 'react';
import Image from 'next/image';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FaCogs, FaDatabase, FaCloud, FaShieldAlt, FaSync, FaChartBar } from 'react-icons/fa';
import { useTranslation } from '@/hooks/useTranslation';

const CustomSoftwareSection = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { t } = useTranslation();

  const features = [
    {
      icon: FaCogs,
      title: t('servicesPage.customSoftware.features.tailoredSolutions.title'),
      description: t('servicesPage.customSoftware.features.tailoredSolutions.description')
    },
    {
      icon: FaDatabase,
      title: t('servicesPage.customSoftware.features.dataManagement.title'),
      description: t('servicesPage.customSoftware.features.dataManagement.description')
    },
    {
      icon: FaCloud,
      title: t('servicesPage.customSoftware.features.cloudIntegration.title'),
      description: t('servicesPage.customSoftware.features.cloudIntegration.description')
    },
    {
      icon: FaShieldAlt,
      title: t('servicesPage.customSoftware.features.enterpriseSecurity.title'),
      description: t('servicesPage.customSoftware.features.enterpriseSecurity.description')
    },
    {
      icon: FaSync,
      title: t('servicesPage.customSoftware.features.systemIntegration.title'),
      description: t('servicesPage.customSoftware.features.systemIntegration.description')
    },
    {
      icon: FaChartBar,
      title: t('servicesPage.customSoftware.features.businessIntelligence.title'),
      description: t('servicesPage.customSoftware.features.businessIntelligence.description')
    }
  ];

  return (
    <Box py={16} bg="var(--color-bg-primary)" id="custom-software">
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" mb={16} textAlign="center" color="var(--color-text-primary)" fontFamily="var(--font-display)">
          {t('servicesPage.customSoftware.title')}{" "}
          <Box as="span" className="gradient-text">
            {t('servicesPage.customSoftware.titleHighlight')}
          </Box>
        </Heading>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={12} align="center">
          <Box flex={1}>
            <Heading as="h2" size="xl" mb={6} color="var(--color-text-primary)" lineHeight="1.2" fontFamily="var(--font-display)">
              {t('servicesPage.customSoftware.heading')} <Box as="span" className="gradient-text">{t('servicesPage.customSoftware.headingHighlight')}</Box>
            </Heading>

            <Text fontSize="lg" color="var(--color-text-secondary)" mb={8}>
              {t('servicesPage.customSoftware.description')}
            </Text>

            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} mb={8}>
              <Flex align="center">
                <Icon as={FaCogs} color="#ff5d22" mr={3} />
                <Text color="var(--color-text-primary)">{t('servicesPage.customSoftware.bullets.processAutomation')}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaDatabase} color="#ff5d22" mr={3} />
                <Text color="var(--color-text-primary)">{t('servicesPage.customSoftware.bullets.customCRM')}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaCloud} color="#ff5d22" mr={3} />
                <Text color="var(--color-text-primary)">{t('servicesPage.customSoftware.bullets.cloudNative')}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaShieldAlt} color="#ff5d22" mr={3} />
                <Text color="var(--color-text-primary)">{t('servicesPage.customSoftware.bullets.complianceReady')}</Text>
              </Flex>
            </SimpleGrid>
          </Box>

          {isDesktop && (
            <Box flex={1} borderRadius="2xl" overflow="hidden" position="relative" h="450px">
              <Image
                src="/img/services/custom-software.png"
                alt={t('servicesPage.customSoftware.preview')}
                fill
                style={{ objectFit: "cover", borderRadius: "1rem" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Box>
          )}
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mt={16}>
          {features.map((feature, index) => (
            <Box
              key={index}
              bg="white"
              p={8}
              borderRadius="xl"
              boxShadow="0 2px 20px rgba(0,0,0,0.06)"
              border="1px solid"
              borderColor="var(--color-border)"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-5px)',
                borderColor: "var(--color-border-hover)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.1)"
              }}
            >
              <Icon as={feature.icon} w={8} h={8} color="#ff5d22" mb={4} />
              <Heading as="h3" size="md" mb={3} color="var(--color-text-primary)" fontFamily="var(--font-display)">
                {feature.title}
              </Heading>
              <Text color="var(--color-text-secondary)">{feature.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CustomSoftwareSection;

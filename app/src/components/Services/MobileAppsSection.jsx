"use client";

import React from 'react';
import Image from 'next/image';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FaApple, FaAndroid, FaMobile, FaRocket, FaShieldAlt, FaSync, FaCode } from 'react-icons/fa';
import { useTranslation } from '@/hooks/useTranslation';

const MobileAppsSection = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { t } = useTranslation();

  const features = [
    {
      icon: FaApple,
      title: t('servicesPage.mobileApps.features.iosExcellence.title'),
      description: t('servicesPage.mobileApps.features.iosExcellence.description')
    },
    {
      icon: FaAndroid,
      title: t('servicesPage.mobileApps.features.androidMastery.title'),
      description: t('servicesPage.mobileApps.features.androidMastery.description')
    },
    {
      icon: FaMobile,
      title: t('servicesPage.mobileApps.features.crossPlatform.title'),
      description: t('servicesPage.mobileApps.features.crossPlatform.description')
    },
    {
      icon: FaCode,
      title: t('servicesPage.mobileApps.features.cleanArchitecture.title'),
      description: t('servicesPage.mobileApps.features.cleanArchitecture.description')
    },
    {
      icon: FaShieldAlt,
      title: t('servicesPage.mobileApps.features.appSecurity.title'),
      description: t('servicesPage.mobileApps.features.appSecurity.description')
    },
    {
      icon: FaSync,
      title: t('servicesPage.mobileApps.features.cicd.title'),
      description: t('servicesPage.mobileApps.features.cicd.description')
    }
  ];

  return (
    <Box py={16} bg="var(--color-bg-primary)" id="mobile-apps">
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" mb={16} textAlign="center" color="var(--color-text-primary)" fontFamily="var(--font-display)">
          {t('servicesPage.mobileApps.title')}{" "}
          <Box as="span" className="gradient-text">
            {t('servicesPage.mobileApps.titleHighlight')}
          </Box>
        </Heading>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={12} align="center">
          <Box flex={1}>
            <Heading as="h2" size="xl" mb={6} color="var(--color-text-primary)" lineHeight="1.2" fontFamily="var(--font-display)">
              {t('servicesPage.mobileApps.heading')} <Box as="span" className="gradient-text">{t('servicesPage.mobileApps.headingHighlight')}</Box>
            </Heading>

            <Text fontSize="lg" color="var(--color-text-secondary)" mb={8}>
              {t('servicesPage.mobileApps.description')}
            </Text>

            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} mb={8}>
              <Flex align="center">
                <Icon as={FaRocket} color="#ff5d22" mr={3} />
                <Text color="var(--color-text-primary)">{t('servicesPage.mobileApps.bullets.appStore')}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaShieldAlt} color="#ff5d22" mr={3} />
                <Text color="var(--color-text-primary)">{t('servicesPage.mobileApps.bullets.securityAudits')}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaSync} color="#ff5d22" mr={3} />
                <Text color="var(--color-text-primary)">{t('servicesPage.mobileApps.bullets.maintenance')}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaMobile} color="#ff5d22" mr={3} />
                <Text color="var(--color-text-primary)">{t('servicesPage.mobileApps.bullets.deviceOptimization')}</Text>
              </Flex>
            </SimpleGrid>
          </Box>

          {isDesktop && (
            <Box flex={1} borderRadius="2xl" overflow="hidden" position="relative" h="450px">
              <Image
                src="/img/services/mobile-apps.png"
                alt={t('servicesPage.mobileApps.preview')}
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

export default MobileAppsSection;

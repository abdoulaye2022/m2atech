"use client";

import React from 'react';
import { Box, Container, Heading, Text, Grid, GridItem, Flex, useBreakpointValue, Icon } from '@chakra-ui/react';
import { FaComments, FaProjectDiagram, FaCode, FaHeadset } from 'react-icons/fa';
import { useTranslation } from '@/hooks/useTranslation';

const ProcessSection = () => {
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 4 });
  const iconSize = useBreakpointValue({ base: 10, md: 12 });
  const { t } = useTranslation();

  const processSteps = [
    {
      icon: FaComments,
      title: t('servicesPage.process.steps.consultation.title'),
      description: t('servicesPage.process.steps.consultation.description')
    },
    {
      icon: FaProjectDiagram,
      title: t('servicesPage.process.steps.planning.title'),
      description: t('servicesPage.process.steps.planning.description')
    },
    {
      icon: FaCode,
      title: t('servicesPage.process.steps.development.title'),
      description: t('servicesPage.process.steps.development.description')
    },
    {
      icon: FaHeadset,
      title: t('servicesPage.process.steps.support.title'),
      description: t('servicesPage.process.steps.support.description')
    }
  ];

  return (
    <Box py={20} bg="gray.50" id="process">
      <Container maxW="container.xl">
        <Box textAlign="center" mb={16}>
          <Heading
            as="h2"
            size="xl"
            mb={4}
            color="gray.800"
            position="relative"
            display="inline-block"
            _after={{
              content: '""',
              display: 'block',
              width: '80px',
              height: '4px',
              bg: 'orange.400',
              mx: 'auto',
              mt: '4'
            }}
          >
            {t('servicesPage.process.title')}
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
            {t('servicesPage.process.subtitle')}
          </Text>
        </Box>

        <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={8}>
          {processSteps.map((step, index) => (
            <GridItem key={index}>
              <Flex
                direction="column"
                align="center"
                textAlign="center"
                bg="white"
                p={8}
                borderRadius="lg"
                boxShadow="md"
                h="100%"
                transition="all 0.3s ease"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: 'xl'
                }}
              >
                <Flex
                  w={iconSize}
                  h={iconSize}
                  bg="orange.100"
                  color="orange.500"
                  borderRadius="full"
                  align="center"
                  justify="center"
                  mb={6}
                >
                  <Icon as={step.icon} boxSize={6} />
                </Flex>
                <Heading as="h3" size="md" mb={4} color="gray.800">
                  {step.title}
                </Heading>
                <Text color="gray.600">
                  {step.description}
                </Text>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProcessSection;

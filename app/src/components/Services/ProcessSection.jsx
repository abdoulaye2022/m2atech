"use client";

import React from 'react';
import { Box, Container, Heading, Text, Flex, Icon, HStack, VStack } from '@chakra-ui/react';
import { FaComments, FaProjectDiagram, FaCode, FaHeadset } from 'react-icons/fa';
import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const ProcessSection = () => {
  const { t } = useTranslation();

  const processSteps = [
    { icon: FaComments, title: t('servicesPage.process.steps.consultation.title'), description: t('servicesPage.process.steps.consultation.description'), num: "01" },
    { icon: FaProjectDiagram, title: t('servicesPage.process.steps.planning.title'), description: t('servicesPage.process.steps.planning.description'), num: "02" },
    { icon: FaCode, title: t('servicesPage.process.steps.development.title'), description: t('servicesPage.process.steps.development.description'), num: "03" },
    { icon: FaHeadset, title: t('servicesPage.process.steps.support.title'), description: t('servicesPage.process.steps.support.description'), num: "04" },
  ];

  return (
    <Box py={24} bg="var(--color-bg-primary)" id="process">
      <Container maxW="1280px">
        <Box textAlign="center" mb={16}>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontFamily="var(--font-display)"
            fontWeight="800"
            color="var(--color-text-primary)"
            mb={4}
          >
            {t('servicesPage.process.title')}
          </Heading>
          <Text fontSize="lg" color="var(--color-text-secondary)" maxW="2xl" mx="auto">
            {t('servicesPage.process.subtitle')}
          </Text>
        </Box>

        {/* Desktop: horizontal timeline */}
        <Box display={{ base: "none", lg: "block" }}>
          <Flex justify="space-between" position="relative">
            {/* Connection line */}
            <Box
              position="absolute"
              top="32px"
              left="60px"
              right="60px"
              h="2px"
              bg="rgba(0, 0, 0, 0.08)"
            >
              <MotionBox
                h="100%"
                bg="#ff5d22"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </Box>

            {processSteps.map((step, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                flex="1"
                textAlign="center"
                px={4}
                position="relative"
              >
                {/* Number circle */}
                <Flex
                  w={16}
                  h={16}
                  borderRadius="full"
                  bg="white"
                  border="2px solid"
                  borderColor="#ff5d22"
                  align="center"
                  justify="center"
                  mx="auto"
                  mb={6}
                  position="relative"
                  zIndex={2}
                >
                  <Text
                    fontFamily="var(--font-display)"
                    fontWeight="800"
                    color="#ff5d22"
                    fontSize="lg"
                  >
                    {step.num}
                  </Text>
                </Flex>

                <Icon as={step.icon} w={6} h={6} color="#ff5d22" mb={3} />
                <Heading
                  as="h3"
                  fontSize="md"
                  fontFamily="var(--font-display)"
                  color="var(--color-text-primary)"
                  mb={3}
                >
                  {step.title}
                </Heading>
                <Text color="var(--color-text-muted)" fontSize="sm" lineHeight="1.7">
                  {step.description}
                </Text>
              </MotionBox>
            ))}
          </Flex>
        </Box>

        {/* Mobile: vertical timeline */}
        <VStack spacing={8} align="stretch" display={{ base: "flex", lg: "none" }}>
          {processSteps.map((step, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Flex gap={5}>
                <Flex direction="column" align="center">
                  <Flex
                    w={12}
                    h={12}
                    borderRadius="full"
                    bg="white"
                    border="2px solid #ff5d22"
                    align="center"
                    justify="center"
                    flexShrink={0}
                  >
                    <Text fontFamily="var(--font-display)" fontWeight="800" color="#ff5d22" fontSize="sm">
                      {step.num}
                    </Text>
                  </Flex>
                  {index < processSteps.length - 1 && (
                    <Box w="2px" flex={1} bg="rgba(0, 0, 0, 0.08)" mt={2} />
                  )}
                </Flex>

                <Box pb={8}>
                  <HStack spacing={2} mb={2}>
                    <Icon as={step.icon} w={5} h={5} color="#ff5d22" />
                    <Heading as="h3" fontSize="md" fontFamily="var(--font-display)" color="var(--color-text-primary)">
                      {step.title}
                    </Heading>
                  </HStack>
                  <Text color="var(--color-text-muted)" fontSize="sm" lineHeight="1.7">
                    {step.description}
                  </Text>
                </Box>
              </Flex>
            </MotionBox>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default ProcessSection;

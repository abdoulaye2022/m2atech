"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  Button,
  Badge,
  List,
  ListItem,
  ListIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  FaServer,
  FaDatabase,
  FaSyncAlt,
  FaHeartbeat,
  FaEdit,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

const MotionBox = motion(Box);

// Tarifs mensuels en dollars canadiens. À ajuster ici : rien d'autre à changer.
const PLANS = [
  { key: "essential", price: 49, highlighted: false },
  { key: "pro", price: 129, highlighted: true },
  { key: "premium", price: 249, highlighted: false },
];

const MaintenanceSection = () => {
  const { t } = useTranslation();
  const base = "servicesPage.maintenance";

  const features = [
    { icon: FaServer, key: "hosting" },
    { icon: FaDatabase, key: "backups" },
    { icon: FaSyncAlt, key: "updates" },
    { icon: FaHeartbeat, key: "monitoring" },
    { icon: FaEdit, key: "changes" },
    { icon: FaChartLine, key: "reports" },
  ];

  const faqKeys = ["commitment", "existingSite", "extraHours"];

  return (
    <Box py={16} bg="var(--color-bg-primary)" id="maintenance">
      <Container maxW="container.xl">
        {/* En-tête */}
        <Box textAlign="center" maxW="820px" mx="auto" mb={16}>
          <Heading as="h1" size="2xl" mb={6} color="var(--color-text-primary)" fontFamily="var(--font-display)">
            {t(`${base}.title`)}{" "}
            <Box as="span" className="gradient-text">
              {t(`${base}.titleHighlight`)}
            </Box>
          </Heading>
          <Text fontSize="xl" color="var(--color-text-secondary)" lineHeight="1.7">
            {t(`${base}.description`)}
          </Text>
        </Box>

        {/* Ce qui est inclus */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mb={24}>
          {features.map((feature) => (
            <Box
              key={feature.key}
              bg="white"
              p={8}
              borderRadius="xl"
              boxShadow="0 2px 20px rgba(0,0,0,0.06)"
              border="1px solid"
              borderColor="var(--color-border)"
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-5px)",
                borderColor: "var(--color-border-hover)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
              }}
            >
              <Icon as={feature.icon} w={8} h={8} color="#ff5d22" mb={4} />
              <Heading as="h3" size="md" mb={3} color="var(--color-text-primary)" fontFamily="var(--font-display)">
                {t(`${base}.features.${feature.key}.title`)}
              </Heading>
              <Text color="var(--color-text-secondary)">{t(`${base}.features.${feature.key}.description`)}</Text>
            </Box>
          ))}
        </SimpleGrid>

        {/* Forfaits */}
        <Box id="pricing" textAlign="center" mb={12} sx={{ scrollMarginTop: "100px" }}>
          <Heading as="h2" size="xl" mb={4} color="var(--color-text-primary)" fontFamily="var(--font-display)">
            {t(`${base}.pricingTitle`)}{" "}
            <Box as="span" className="gradient-text">
              {t(`${base}.pricingTitleHighlight`)}
            </Box>
          </Heading>
          <Text fontSize="lg" color="var(--color-text-secondary)" maxW="640px" mx="auto">
            {t(`${base}.pricingSubtitle`)}
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8} alignItems="stretch" mb={24}>
          {PLANS.map((plan, index) => {
            const included = t(`${base}.plans.${plan.key}.included`);
            return (
              <MotionBox
                key={plan.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                h="100%"
              >
                <Flex
                  direction="column"
                  h="100%"
                  p={8}
                  borderRadius="2xl"
                  bg={plan.highlighted ? "#1c1c21" : "white"}
                  color={plan.highlighted ? "white" : "var(--color-text-primary)"}
                  border="2px solid"
                  borderColor={plan.highlighted ? "#ff5d22" : "var(--color-border)"}
                  boxShadow={plan.highlighted ? "0 20px 50px rgba(255, 93, 34, 0.25)" : "0 2px 20px rgba(0,0,0,0.06)"}
                  position="relative"
                  transform={{ lg: plan.highlighted ? "scale(1.04)" : "none" }}
                >
                  {plan.highlighted && (
                    <Badge
                      position="absolute"
                      top={-3}
                      left="50%"
                      transform="translateX(-50%)"
                      bg="#ff5d22"
                      color="white"
                      px={4}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                      fontWeight={700}
                      letterSpacing="wider"
                    >
                      {t(`${base}.mostPopular`)}
                    </Badge>
                  )}

                  <Heading as="h3" size="md" fontFamily="var(--font-display)" mb={1}>
                    {t(`${base}.plans.${plan.key}.name`)}
                  </Heading>
                  <Text fontSize="sm" color={plan.highlighted ? "whiteAlpha.700" : "var(--color-text-muted)"} mb={6} minH="40px">
                    {t(`${base}.plans.${plan.key}.tagline`)}
                  </Text>

                  <Flex align="baseline" gap={1} mb={1}>
                    <Text fontSize="5xl" fontWeight={800} fontFamily="var(--font-display)" lineHeight="1">
                      {plan.price}
                      <Text as="span" fontSize="2xl" ml={1}>$</Text>
                    </Text>
                    <Text fontSize="md" color={plan.highlighted ? "whiteAlpha.700" : "var(--color-text-muted)"}>
                      {t(`${base}.perMonth`)}
                    </Text>
                  </Flex>
                  <Text fontSize="xs" color={plan.highlighted ? "whiteAlpha.600" : "var(--color-text-muted)"} mb={6}>
                    {t(`${base}.priceNote`)}
                  </Text>

                  <List spacing={3} mb={8} flex="1">
                    {Array.isArray(included) &&
                      included.map((item) => (
                        <ListItem key={item} display="flex" alignItems="flex-start" fontSize="sm">
                          <ListIcon as={FaCheckCircle} color="#ff5d22" mt={0.5} />
                          <Text as="span" color={plan.highlighted ? "whiteAlpha.900" : "var(--color-text-secondary)"}>
                            {item}
                          </Text>
                        </ListItem>
                      ))}
                  </List>

                  <Link href={`/contact?plan=${plan.key}`} passHref>
                    <Button
                      as="span"
                      w="100%"
                      size="lg"
                      bg={plan.highlighted ? "#ff5d22" : "transparent"}
                      color={plan.highlighted ? "white" : "#ff5d22"}
                      border="2px solid #ff5d22"
                      borderRadius="xl"
                      fontFamily="var(--font-display)"
                      fontWeight={700}
                      rightIcon={<FaArrowRight />}
                      _hover={{ bg: "#ff5d22", color: "white", transform: "translateY(-2px)" }}
                      transition="all 0.3s ease"
                    >
                      {t(`${base}.choosePlan`)}
                    </Button>
                  </Link>
                </Flex>
              </MotionBox>
            );
          })}
        </SimpleGrid>

        {/* Garanties */}
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={6}
          justify="center"
          align="center"
          mb={24}
          px={{ base: 6, md: 10 }}
          py={6}
          borderRadius="xl"
          bg="var(--color-bg-secondary)"
          border="1px solid"
          borderColor="var(--color-border)"
        >
          {["noCommitment", "canadianHosting", "responseTime"].map((key) => (
            <Flex key={key} align="center" gap={3} flex="1">
              <Icon as={FaShieldAlt} color="#ff5d22" w={5} h={5} flexShrink={0} />
              <Text fontSize="sm" fontWeight={600} color="var(--color-text-primary)">
                {t(`${base}.guarantees.${key}`)}
              </Text>
            </Flex>
          ))}
        </Flex>

        {/* FAQ */}
        <Box maxW="820px" mx="auto">
          <Heading as="h2" size="lg" mb={8} textAlign="center" color="var(--color-text-primary)" fontFamily="var(--font-display)">
            {t(`${base}.faqTitle`)}
          </Heading>
          <Accordion allowToggle>
            {faqKeys.map((key) => (
              <AccordionItem key={key} border="1px solid" borderColor="var(--color-border)" borderRadius="xl" mb={3} overflow="hidden">
                <AccordionButton py={4} _expanded={{ bg: "#fff3ee", color: "#ff5d22" }}>
                  <Box flex="1" textAlign="left" fontWeight={600}>
                    {t(`${base}.faq.${key}.question`)}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={5} color="var(--color-text-secondary)">
                  {t(`${base}.faq.${key}.answer`)}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
};

export default MaintenanceSection;

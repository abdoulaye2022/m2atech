"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useTranslation } from "@/hooks/useTranslation";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <Box
        borderBottom="1px solid"
        borderColor="var(--color-border)"
        py={5}
      >
        <Flex
          as="button"
          w="100%"
          justify="space-between"
          align="center"
          cursor="pointer"
          onClick={onClick}
          textAlign="left"
          gap={4}
          role="button"
          aria-expanded={isOpen}
        >
          <Text
            fontFamily="var(--font-display)"
            fontWeight="600"
            fontSize={{ base: "md", md: "lg" }}
            color={isOpen ? "#ff5d22" : "var(--color-text-primary)"}
            transition="color 0.2s"
          >
            {question}
          </Text>
          <Flex
            w={8}
            h={8}
            borderRadius="lg"
            bg={isOpen ? "#fff3ee" : "rgba(0, 0, 0, 0.05)"}
            align="center"
            justify="center"
            flexShrink={0}
            transition="all 0.2s"
          >
            <Icon
              as={isOpen ? FaMinus : FaPlus}
              w={3}
              h={3}
              color={isOpen ? "#ff5d22" : "var(--color-text-muted)"}
              transition="color 0.2s"
            />
          </Flex>
        </Flex>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <Text
                color="var(--color-text-secondary)"
                fontSize="sm"
                lineHeight="1.8"
                pt={4}
                maxW="90%"
              >
                {answer}
              </Text>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </MotionBox>
  );
};

const FAQSection = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { question: t('home.faq.questions.q1'), answer: t('home.faq.questions.a1') },
    { question: t('home.faq.questions.q2'), answer: t('home.faq.questions.a2') },
    { question: t('home.faq.questions.q3'), answer: t('home.faq.questions.a3') },
    { question: t('home.faq.questions.q4'), answer: t('home.faq.questions.a4') },
    { question: t('home.faq.questions.q5'), answer: t('home.faq.questions.a5') },
    { question: t('home.faq.questions.q6'), answer: t('home.faq.questions.a6') },
    { question: t('home.faq.questions.q7'), answer: t('home.faq.questions.a7') },
    { question: t('home.faq.questions.q8'), answer: t('home.faq.questions.a8') },
  ];

  return (
    <Box py={24} bg="var(--color-bg-secondary)">
      <Container maxW="800px">
        <Box textAlign="center" mb={16}>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontFamily="var(--font-display)"
            fontWeight="700"
            color="var(--color-text-primary)"
            mb={4}
          >
            {t('home.faq.title')}{" "}
            <Text as="span" className="gradient-text">
              {t('home.faq.titleHighlight')}
            </Text>
          </Heading>
          <Text color="var(--color-text-secondary)" fontSize="lg">
            {t('home.faq.subtitle')}
          </Text>
        </Box>

        <VStack spacing={0} align="stretch">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              index={index}
            />
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default FAQSection;

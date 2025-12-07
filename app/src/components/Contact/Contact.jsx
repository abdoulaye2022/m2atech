"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  useBreakpointValue,
  Input,
  Textarea,
  Button,
  Stack,
  Link,
  useToast,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaCheckCircle,
  FaFacebook,
} from "react-icons/fa";
import { api_contact } from "@/app/api/contact/contact";
import { useTranslation } from "@/hooks/useTranslation";
import AnimatedSection from "../Partials/AnimatedSection";
import StaggeredContainer from "../Partials/StaggeredContainer";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const Contact = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const address = "74 Belmont St, Moncton, NB E1C 8W4";
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&q=${encodedAddress}`;
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { t } = useTranslation();

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  // Load reCAPTCHA Enterprise script
  useEffect(() => {
    if (!recaptchaSiteKey || recaptchaSiteKey === 'your-recaptcha-site-key') return;

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${recaptchaSiteKey}`;
    script.async = true;
    script.onload = () => setRecaptchaLoaded(true);
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(`script[src*="recaptcha/enterprise.js"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [recaptchaSiteKey]);

  // Get reCAPTCHA token
  const getRecaptchaToken = useCallback(async () => {
    if (!recaptchaLoaded || !window.grecaptcha?.enterprise) {
      return null;
    }

    return new Promise((resolve) => {
      window.grecaptcha.enterprise.ready(async () => {
        try {
          const token = await window.grecaptcha.enterprise.execute(recaptchaSiteKey, {
            action: 'CONTACT_FORM'
          });
          resolve(token);
        } catch (error) {
          console.error('reCAPTCHA error:', error);
          resolve(null);
        }
      });
    });
  }, [recaptchaLoaded, recaptchaSiteKey]);

  const getContactMethods = () => [
    {
      icon: FaMapMarkerAlt,
      title: t('contact.info.address'),
      description: address,
      link: `https://www.google.com/maps?q=${encodedAddress}`,
    },
    {
      icon: FaPhone,
      title: t('contact.info.phone'),
      description: "+1 (506) 850-6548",
      link: "tel:+15068506548",
    },
    {
      icon: FaEnvelope,
      title: t('contact.info.email'),
      description: "contact@m2atech.com",
      link: "mailto:contact@m2atech.com",
    },
  ];

  const validateForm = (formData) => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = t('contact.form.errors.nameRequired');
    }

    if (!formData.email.trim()) {
      errors.email = t('contact.form.errors.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = t('contact.form.errors.emailInvalid');
    }

    if (!formData.subject.trim()) {
      errors.subject = t('contact.form.errors.subjectRequired');
    }

    if (!formData.message.trim()) {
      errors.message = t('contact.form.errors.messageRequired');
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Get reCAPTCHA Enterprise token
      const recaptchaToken = await getRecaptchaToken();

      if (!recaptchaToken && recaptchaSiteKey && recaptchaSiteKey !== 'your-recaptcha-site-key') {
        toast({
          title: t('contact.form.errors.recaptchaRequired'),
          description: "reCAPTCHA verification failed. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        setIsSubmitting(false);
        return;
      }

      // Include recaptcha token in the request
      const res = await api_contact({
        ...formData,
        recaptchaToken: recaptchaToken,
      });

      if (res.status) {
        onOpen();
        e.target.reset();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while sending your message.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const buttonHoverVariants = {
    hover: {
      y: -2,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <Box py={16} bg="white" id="contact" position="relative" overflow="hidden">
      {/* Decorative shape - Globe map en arrière-plan */}
      <Box
        position="absolute"
        right={{ base: "-200px", md: "-100px", lg: "0" }}
        top="50%"
        transform="translateY(-50%)"
        w={{ base: "400px", md: "500px", lg: "600px" }}
        h={{ base: "400px", md: "500px", lg: "600px" }}
        opacity={0.15}
        zIndex={0}
        pointerEvents="none"
      >
        <Image
          src="/img/shape/map-shape1.png"
          alt=""
          w="100%"
          h="100%"
          objectFit="contain"
        />
      </Box>

      {/* Decorative shape - Vector en bas à gauche */}
      <Box
        position="absolute"
        left={{ base: "-150px", md: "-100px" }}
        bottom={{ base: "-100px", md: "-50px" }}
        w={{ base: "300px", md: "400px" }}
        h={{ base: "300px", md: "400px" }}
        opacity={0.15}
        zIndex={0}
        pointerEvents="none"
        display={{ base: "none", md: "block" }}
      >
        <Image
          src="/img/shape/vector-shape5.png"
          alt=""
          w="100%"
          h="100%"
          objectFit="contain"
        />
      </Box>

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <AnimatedSection>
          <Heading as="h1" size="2xl" mb={16} textAlign="center" color="gray.800">
            {t('contact.title')}{" "}
            <Box as="span" color="#DD6B20">
              {t('contact.titleHighlight')}
            </Box>
          </Heading>
        </AnimatedSection>

        <Flex direction={{ base: "column", lg: "row" }} gap={12} align="center">
          {/* Contact Form */}
          <AnimatedSection flex={1} w="100%" delay={0.2}>
            <MotionBox
              bg="gray.50"
              p={8}
              borderRadius="2xl"
              boxShadow="sm"
              border="1px solid"
              borderColor="orange.100"
              whileHover={{
                boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                borderColor: "orange.200"
              }}
              transition={{ duration: 0.3 }}
            >
              <Heading as="h2" size="lg" mb={6} color="gray.800">
                {t('contact.form.title')}
              </Heading>

              <form onSubmit={handleSubmit}>
                <StaggeredContainer staggerDelay={0.1}>
                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <Box>
                      <Text mb={2} fontWeight="medium">
                        {t('contact.form.name')}
                      </Text>
                      <motion.div variants={inputVariants} whileFocus="focus">
                        <Input
                          name="name"
                          placeholder={t('contact.form.namePlaceholder')}
                          bg="white"
                          size="lg"
                          focusBorderColor="#DD6B20"
                          isInvalid={!!errors.name}
                          _focus={{
                            borderColor: "#DD6B20",
                            boxShadow: "0 0 0 1px #DD6B20"
                          }}
                          transition="all 0.2s ease"
                        />
                      </motion.div>
                      {errors.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Text color="red.500" fontSize="sm" mt={1}>
                            {errors.name}
                          </Text>
                        </motion.div>
                      )}
                    </Box>
                  </motion.div>

                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <Box>
                      <Text mb={2} fontWeight="medium">
                        {t('contact.form.email')}
                      </Text>
                      <motion.div variants={inputVariants} whileFocus="focus">
                        <Input
                          name="email"
                          placeholder={t('contact.form.emailPlaceholder')}
                          bg="white"
                          size="lg"
                          focusBorderColor="#DD6B20"
                          isInvalid={!!errors.email}
                          _focus={{
                            borderColor: "#DD6B20",
                            boxShadow: "0 0 0 1px #DD6B20"
                          }}
                          transition="all 0.2s ease"
                        />
                      </motion.div>
                      {errors.email && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Text color="red.500" fontSize="sm" mt={1}>
                            {errors.email}
                          </Text>
                        </motion.div>
                      )}
                    </Box>
                  </motion.div>

                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <Box>
                      <Text mb={2} fontWeight="medium">
                        {t('contact.form.subject')}
                      </Text>
                      <motion.div variants={inputVariants} whileFocus="focus">
                        <Input
                          name="subject"
                          placeholder={t('contact.form.subjectPlaceholder')}
                          bg="white"
                          size="lg"
                          focusBorderColor="#DD6B20"
                          isInvalid={!!errors.subject}
                          _focus={{
                            borderColor: "#DD6B20",
                            boxShadow: "0 0 0 1px #DD6B20"
                          }}
                          transition="all 0.2s ease"
                        />
                      </motion.div>
                      {errors.subject && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Text color="red.500" fontSize="sm" mt={1}>
                            {errors.subject}
                          </Text>
                        </motion.div>
                      )}
                    </Box>
                  </motion.div>

                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <Box>
                      <Text mb={2} fontWeight="medium">
                        {t('contact.form.message')}
                      </Text>
                      <motion.div variants={inputVariants} whileFocus="focus">
                        <Textarea
                          name="message"
                          placeholder={t('contact.form.messagePlaceholder')}
                          bg="white"
                          size="lg"
                          rows={6}
                          focusBorderColor="#DD6B20"
                          isInvalid={!!errors.message}
                          _focus={{
                            borderColor: "#DD6B20",
                            boxShadow: "0 0 0 1px #DD6B20"
                          }}
                          transition="all 0.2s ease"
                        />
                      </motion.div>
                      {errors.message && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Text color="red.500" fontSize="sm" mt={1}>
                            {errors.message}
                          </Text>
                        </motion.div>
                      )}
                    </Box>
                  </motion.div>

                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <MotionButton
                      type="submit"
                      rightIcon={<FaPaperPlane />}
                      bg="#DD6B20"
                      color="white"
                      size="lg"
                      width="full"
                      mt={4}
                      variants={buttonHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                      _hover={{
                        bg: "orange.600",
                        boxShadow: "0 8px 25px rgba(221, 107, 32, 0.3)"
                      }}
                      isLoading={isSubmitting}
                      loadingText={t('contact.form.sending')}
                      spinner={<Spinner size="sm" />}
                      transition="all 0.3s ease"
                    >
                      {t('contact.form.submit')}
                    </MotionButton>
                    {/* reCAPTCHA Enterprise badge info */}
                    <Text fontSize="xs" color="gray.500" mt={2} textAlign="center">
                      {t('contact.form.recaptchaNotice')}
                    </Text>
                  </motion.div>
                </StaggeredContainer>
              </form>
            </MotionBox>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection flex={1} w="100%" delay={0.4} direction="right">
            <MotionBox
              bg="white"
              p={8}
              borderRadius="2xl"
              boxShadow="sm"
              border="1px solid"
              borderColor="gray.100"
              whileHover={{
                boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                borderColor: "orange.100"
              }}
              transition={{ duration: 0.3 }}
            >
              <Heading as="h2" size="lg" mb={6} color="gray.800">
                {t('contact.info.title')}
              </Heading>

              <Text fontSize="lg" color="gray.600" mb={8} lineHeight="1.6">
                {t('contact.info.description')}
              </Text>

            <StaggeredContainer staggerDelay={0.1}>
              <SimpleGrid columns={1} spacing={6} mb={8}>
                {getContactMethods().map((method, index) => (
                  <motion.div 
                    key={index}
                    variants={{ 
                      hidden: { opacity: 0, x: 30 }, 
                      visible: { opacity: 1, x: 0 } 
                    }}
                  >
                    <MotionBox
                      as="a"
                      href={method.link}
                      target={method.icon === FaMapMarkerAlt ? "_blank" : "_self"}
                      display="flex"
                      alignItems="center"
                      bg="gray.50"
                      p={6}
                      borderRadius="xl"
                      border="1px solid"
                      borderColor="gray.100"
                      whileHover={{
                        y: -3,
                        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                        borderColor: "orange.200",
                      }}
                      transition={{ duration: 0.3 }}
                      cursor="pointer"
                      textDecoration="none"
                      _hover={{ textDecoration: "none" }}
                    >
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon as={method.icon} w={6} h={6} color="#DD6B20" mr={4} />
                      </motion.div>
                      <Box>
                        <Heading as="h3" size="sm" mb={1} color="gray.800">
                          {method.title}
                        </Heading>
                        <Text
                          color="gray.600"
                          _hover={{ color: "#DD6B20" }}
                          transition="color 0.2s"
                        >
                          {method.description}
                        </Text>
                      </Box>
                    </MotionBox>
                  </motion.div>
                ))}
              </SimpleGrid>
            </StaggeredContainer>

              <AnimatedSection delay={0.6}>
                <Box>
                  <Text fontWeight="medium" mb={4} fontSize="lg" color="gray.800">
                    {t('contact.info.socialMedia')}
                  </Text>
                  <Stack direction={{ base: "column", md: "row" }} spacing={3}>
                    <MotionButton
                      as={Link}
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=61578397720574"
                      leftIcon={<FaFacebook />}
                      bg="#1877F2"
                      color="white"
                      size="md"
                      isExternal
                      variants={buttonHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                      _hover={{
                        bg: "#166FE5",
                        boxShadow: "0 8px 25px rgba(24, 119, 242, 0.3)",
                        transform: "translateY(-2px)"
                      }}
                      transition="all 0.3s ease"
                      flex={1}
                    >
                      Facebook
                    </MotionButton>
                    <MotionButton
                      as={Link}
                      target="_blank"
                      href="https://www.linkedin.com/company/m2atech-solutions-inc"
                      leftIcon={<FaLinkedin />}
                      bg="#0A66C2"
                      color="white"
                      size="md"
                      isExternal
                      variants={buttonHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                      _hover={{
                        bg: "#094E91",
                        boxShadow: "0 8px 25px rgba(10, 102, 194, 0.3)",
                        transform: "translateY(-2px)"
                      }}
                      transition="all 0.3s ease"
                      flex={1}
                    >
                      LinkedIn
                    </MotionButton>
                    <MotionButton
                      as={Link}
                      target="_blank"
                      href="https://www.instagram.com/m2atech.solutions?igsh=MWk4dWdubXBsNmJzZg%3D%3D&utm_source=qr"
                      leftIcon={<FaInstagram />}
                      bg="linear-gradient(45deg, #E1306C, #FD1D1D, #F77737, #FCAF45, #FFDC80)"
                      color="white"
                      size="md"
                      isExternal
                      variants={buttonHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                      _hover={{
                        bg: "linear-gradient(45deg, #C13584, #E1306C, #FD1D1D, #F77737)",
                        boxShadow: "0 8px 25px rgba(225, 48, 108, 0.3)",
                        transform: "translateY(-2px)"
                      }}
                      transition="all 0.3s ease"
                      flex={1}
                    >
                      Instagram
                    </MotionButton>
                  </Stack>
                </Box>
              </AnimatedSection>
            </MotionBox>
          </AnimatedSection>
        </Flex>

        {/* Google Maps */}
        <AnimatedSection delay={0.8}>
          <Box
            mt={16}
            position="relative"
            bg="white"
            textAlign="center"
            overflow="hidden"
          >
            <Flex direction="column" align="center">
              <MotionBox
                w="100%"
                h={isDesktop ? "500px" : "300px"}
                borderRadius="xl"
                overflow="hidden"
                boxShadow="md"
                border="1px solid"
                borderColor="gray.200"
                whileHover={{
                  boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
                  borderColor: "orange.200"
                }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  title="Google Maps"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={mapUrl}
                ></iframe>
              </MotionBox>
            </Flex>
          </Box>
        </AnimatedSection>
      </Container>

      {/* Success Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay backdropFilter="blur(4px)" />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <ModalContent
            border="2px solid #DD6B20"
            borderRadius="lg"
            boxShadow="xl"
          >
            <ModalHeader
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="xl"
              fontWeight="bold"
              color="#DD6B20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <Icon as={FaCheckCircle} w={8} h={8} color="#DD6B20" mr={2} />
              </motion.div>
              {t('contact.success.title')}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody textAlign="center" pb={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <Text fontSize="lg" mb={4}>
                  {t('contact.success.message')}
                </Text>
                <Text fontSize="md" color="gray.600">
                  {t('contact.success.subtitle')}
                </Text>
              </motion.div>
            </ModalBody>
          </ModalContent>
        </motion.div>
      </Modal>
    </Box>
  );
};

export default Contact;

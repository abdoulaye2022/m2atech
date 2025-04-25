"use client";

import React, { useState } from "react";
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
} from "react-icons/fa";
import { api_contact } from "@/app/api/contact/contact";

const Contact = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const address = "74 Belmont St, Moncton, NB E1C 8W4";
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&q=${encodedAddress}`;
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const contactMethods = [
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      description: address,
      link: `https://www.google.com/maps?q=${encodedAddress}`,
    },
    {
      icon: FaPhone,
      title: "Phone",
      description: "+1 (506) 850-6548",
      link: "tel:+15068506548",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      description: "contact@m2atech.com",
      link: "mailto:contact@m2atech.com",
    },
  ];

  const validateForm = (formData) => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
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
      // Simuler un appel API
      const res = await api_contact(formData);

      console.log(res);

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

  return (
    <Box py={16} bg="white" id="contact">
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" mb={16} textAlign="center" color="gray.800">
          Contact{" "}
          <Box as="span" color="#DD6B20">
            Us
          </Box>
        </Heading>

        <Flex direction={{ base: "column", lg: "row" }} gap={12} align="center">
          {/* Contact Form */}
          <Box flex={1} w="100%">
            <Box
              bg="gray.50"
              p={8}
              borderRadius="2xl"
              boxShadow="sm"
              border="1px solid"
              borderColor="orange.100"
            >
              <Heading as="h2" size="lg" mb={6} color="gray.800">
                Send Us a Message
              </Heading>

              <form onSubmit={handleSubmit}>
                <Stack spacing={6}>
                  <Box>
                    <Text mb={2} fontWeight="medium">
                      Your Name
                    </Text>
                    <Input
                      name="name"
                      placeholder="John Doe"
                      bg="white"
                      size="lg"
                      focusBorderColor="#DD6B20"
                      isInvalid={!!errors.name}
                    />
                    {errors.name && (
                      <Text color="red.500" fontSize="sm" mt={1}>
                        {errors.name}
                      </Text>
                    )}
                  </Box>

                  <Box>
                    <Text mb={2} fontWeight="medium">
                      Your Email
                    </Text>
                    <Input
                      name="email"
                      placeholder="john@example.com"
                      bg="white"
                      size="lg"
                      focusBorderColor="#DD6B20"
                      isInvalid={!!errors.email}
                    />
                    {errors.email && (
                      <Text color="red.500" fontSize="sm" mt={1}>
                        {errors.email}
                      </Text>
                    )}
                  </Box>

                  <Box>
                    <Text mb={2} fontWeight="medium">
                      Subject
                    </Text>
                    <Input
                      name="subject"
                      placeholder="Information Request"
                      bg="white"
                      size="lg"
                      focusBorderColor="#DD6B20"
                      isInvalid={!!errors.subject}
                    />
                    {errors.subject && (
                      <Text color="red.500" fontSize="sm" mt={1}>
                        {errors.subject}
                      </Text>
                    )}
                  </Box>

                  <Box>
                    <Text mb={2} fontWeight="medium">
                      Message
                    </Text>
                    <Textarea
                      name="message"
                      placeholder="Tell us how we can help you..."
                      bg="white"
                      size="lg"
                      rows={6}
                      focusBorderColor="#DD6B20"
                      isInvalid={!!errors.message}
                    />
                    {errors.message && (
                      <Text color="red.500" fontSize="sm" mt={1}>
                        {errors.message}
                      </Text>
                    )}
                  </Box>

                  <Button
                    type="submit"
                    rightIcon={<FaPaperPlane />}
                    bg="#DD6B20"
                    color="white"
                    size="lg"
                    width="full"
                    mt={4}
                    _hover={{
                      bg: "orange.600",
                    }}
                    isLoading={isSubmitting}
                    loadingText="Sending..."
                    spinner={<Spinner size="sm" />}
                  >
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Box>
          </Box>

          {/* Contact Information */}
          <Box flex={1} w="100%">
            <Heading as="h2" size="lg" mb={6} color="gray.800">
              Our Information
            </Heading>

            <Text fontSize="lg" color="gray.600" mb={8}>
              We're available to answer all your questions. Feel free to contact
              us by phone, email, or through our social media.
            </Text>

            <SimpleGrid columns={1} spacing={6} mb={8}>
              {contactMethods.map((method, index) => (
                <Flex
                  key={index}
                  align="center"
                  bg="gray.50"
                  p={6}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="gray.100"
                  transition="all 0.3s"
                  _hover={{
                    transform: "translateY(-3px)",
                    boxShadow: "sm",
                    borderColor: "orange.200",
                  }}
                >
                  <Icon as={method.icon} w={6} h={6} color="#DD6B20" mr={4} />
                  <Box>
                    <Heading as="h3" size="sm" mb={1} color="gray.800">
                      {method.title}
                    </Heading>
                    <Link
                      href={method.link}
                      color="gray.600"
                      _hover={{ color: "#DD6B20" }}
                    >
                      {method.description}
                    </Link>
                  </Box>
                </Flex>
              ))}
            </SimpleGrid>

            <Box>
              <Text fontWeight="medium" mb={4}>
                Social Media
              </Text>
              <Flex gap={4}>
                <Button
                  as={Link}
                  target="_blank"
                  href="https://www.linkedin.com/company/m2atech-solutions-inc"
                  leftIcon={<FaLinkedin />}
                  colorScheme="blue"
                  isExternal
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "md",
                  }}
                  transition="all 0.2s"
                >
                  LinkedIn
                </Button>
                <Button
                  as={Link}
                  target="_blank"
                  href="https://www.instagram.com/m2atech.solutions?igsh=MWk4dWdubXBsNmJzZg%3D%3D&utm_source=qr"
                  leftIcon={<FaInstagram />}
                  colorScheme="pink"
                  isExternal
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "md",
                  }}
                  transition="all 0.2s"
                >
                  Instagram
                </Button>
              </Flex>
            </Box>
          </Box>
        </Flex>

        {/* Google Maps */}
        <Box
          mt={16}
          position="relative"
          bg="white"
          textAlign="center"
          overflow="hidden"
        >
          <Flex direction="column" align="center">
            <Box
              w="100%"
              h={isDesktop ? "500px" : "300px"}
              borderRadius="xl"
              overflow="hidden"
              boxShadow="md"
              border="1px solid"
              borderColor="gray.200"
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
            </Box>
          </Flex>
        </Box>
      </Container>

      {/* Success Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          border="2px solid #DD6B20"
          borderRadius="lg"
          boxShadow="lg"
        >
          <ModalHeader
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="xl"
            fontWeight="bold"
            color="#DD6B20"
          >
            <Icon as={FaCheckCircle} w={8} h={8} color="#DD6B20" mr={2} />
            Thank You!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign="center" pb={6}>
            <Text fontSize="lg" mb={4}>
              Your message has been sent successfully.
            </Text>
            <Text fontSize="md" color="gray.600">
              We will get back to you soon.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Contact;

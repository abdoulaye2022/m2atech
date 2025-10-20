"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function ClientLayout({ children }) {
  return (
    <ChakraProvider>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ChakraProvider>
  );
}
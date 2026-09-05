"use client";

import ProductsSection from "@/components/Products/ProductsSection";
import ContactBanner from "@/components/Partials/ContactBanner";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";
import { Box } from "@chakra-ui/react";

function ProductsPage() {
  return (
    <>
      <Navbar />
      <Box pt="80px" bg="var(--color-bg-primary)">
        <ProductsSection />
        <ContactBanner />
        <FooterApp />
      </Box>
    </>
  );
}

export default ProductsPage;

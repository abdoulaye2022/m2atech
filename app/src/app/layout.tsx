import "../app/styles/bootstrap.min.css";
import "../app/styles/boxicons.min.css";
import "../app/styles/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-tabs/style/react-tabs.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Styles
import "../app/styles/style.css";
import "../app/styles/responsive.css";

import AosAnimation from "@/components/Layouts/AosAnimation";
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "M2ATECH",
  description: "M2atech is a dynamic startup specializing in custom web and mobile development, along with UX/UI design. We create innovative, user-friendly digital solutions that drive business growth and transformation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {children}

        <AosAnimation />
      </body>
    </html>
  );
}

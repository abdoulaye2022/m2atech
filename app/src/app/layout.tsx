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
  title: "M2ATECH - Web & Mobile Development in Moncton, NB | UX/UI Design",
  description:
    "M2ATECH, based in Moncton, New Brunswick, specializes in custom web and mobile development, and UX/UI design. We deliver innovative digital solutions for businesses across Canada, helping them grow and transform.",
  keywords: [
    "web development Moncton",
    "mobile app development New Brunswick",
    "custom software Canada",
    "UX/UI design Moncton",
    "React JS development",
    "Next JS development",
    "Flutter development",
    "Laravel development",
    "Node JS development",
    "digital solutions Canada",
    "business growth Moncton",
    "tech startup New Brunswick",
  ],
  openGraph: {
    title: "M2ATECH - Web & Mobile Development in Moncton, NB | UX/UI Design",
    description:
      "M2ATECH, based in Moncton, New Brunswick, specializes in custom web and mobile development, and UX/UI design. We deliver innovative digital solutions for businesses across Canada, helping them grow and transform.",
    url: "https://www.m2atech.com", // Replace with your actual website URL
    siteName: "M2ATECH",
    images: [
      {
        url: "https://www.m2atech.com/img/og-image.jpg", // Replace with your actual Open Graph image URL
        width: 1200,
        height: 630,
        alt: "M2ATECH - Web & Mobile Development in Moncton, NB",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M2ATECH - Web & Mobile Development in Moncton, NB | UX/UI Design",
    description:
      "M2ATECH, based in Moncton, New Brunswick, specializes in custom web and mobile development, and UX/UI design. We deliver innovative digital solutions for businesses across Canada, helping them grow and transform.",
    images: ["https://www.m2atech.com/img/twitter-image.jpg"], // Replace with your actual Twitter image URL
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l] = w[l] || [];
                w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WVHTZ5VK');
            `,
          }}
        />
      </head>
      <body className={nunito.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WVHTZ5VK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
        <AosAnimation />
      </body>
    </html>
  );
}
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import JsonLdSchema from "@/components/JsonLdSchema";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#dc2626",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dineshlearners.com"),
  title: {
    default: "Dinesh Learners Jaffna | #1 Driving School in Jaffna (DMT: DS:385)",
    template: "%s | Dinesh Learners Jaffna",
  },
  description:
    "தினேஷ் லேணர்ஸ் யாழ்ப்பாணம் (DMT DS:385) – Jaffna's #1 modern driving school. 3D Virtual Cockpit Simulator, Dual-Control Fleet (Auto & Manual Cars, Motorbikes, Tuk-Tuks, Heavy Bus/Lorry), Lady Instructors, 100% Free Medical Exam & Kachcheri Booking. Call 077 518 9963 / 021 4327 102.",
  keywords: [
    // Brand names
    "Dinesh Learners",
    "Dinesh Learners Jaffna",
    "Dinesh Driving School",
    "Dinesh Driving School Jaffna",
    "தினேஷ் லேணர்ஸ்",
    "டினேஸ் லேணர்ஸ்",
    "தினேஷ் சாரதிப் பயிற்சி நிலையம்",
    "දිනේෂ් රියදුරු පාසල",
    "දිනේෂ් ලර්නර්ස් යාපනය",
    // Primary Jaffna Driving School Queries
    "Driving school in Jaffna",
    "Best driving school in Jaffna",
    "Driving school Jaffna",
    "Learners in Jaffna",
    "Jaffna Learners",
    "Driving classes Jaffna",
    "Driving license Jaffna",
    "சாரதி பயிற்சி நிலையம் யாழ்ப்பாணம்",
    "யாழ்ப்பாணம் லேணர்ஸ்",
    "යාපනය රියදුරු පාසල",
    // Special Features
    "3D driving simulator Jaffna",
    "Dual control car driving school Jaffna",
    "Lady driving instructors Jaffna",
    "Heavy vehicle driving license Jaffna",
    "Motorcycle license Jaffna",
    "Tuk tuk driving license Jaffna",
    // DMT & Location
    "DMT DS:385",
    "DMT driving trial Jaffna",
    "YMCA Jaffna driving school",
    "Kandy Road Jaffna learners"
  ],
  authors: [{ name: "K. Dinesh (க. தினேஷ்)", url: "https://dineshlearners.com" }],
  creator: "K. Dinesh",
  publisher: "Dinesh Learners & Driving School",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "https://dineshlearners.com",
    languages: {
      "ta-LK": "https://dineshlearners.com?lang=ta",
      "en-US": "https://dineshlearners.com?lang=en",
      "si-LK": "https://dineshlearners.com?lang=si",
      "x-default": "https://dineshlearners.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "ta_LK",
    alternateLocale: ["en_US", "si_LK"],
    url: "https://dineshlearners.com",
    siteName: "Dinesh Learners & Driving School Jaffna",
    title: "Dinesh Learners Jaffna | #1 Modern Driving School (DMT: DS:385)",
    description:
      "யாழ்ப்பாணத்தின் முன்னணி நவீன சாரதிப் பயிற்சி நிலையம். Modern 3D Simulator, Dual-Control Cars, Lady Instructors, Free Medical & Kachcheri Assistance. DMT Reg: DS:385.",
    images: [
      {
        url: "/assets/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Dinesh Learners Driving School Jaffna - Dual Control Fleet & 3D Simulator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinesh Learners Jaffna | Leading Driving School (DMT: DS:385)",
    description:
      "Jaffna's leading driving academy. 3D VR Simulator, Dual-Control fleet, Lady instructors, 99.4% exam pass rate. Call 077 518 9963.",
    images: ["/assets/banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  other: {
    "geo.region": "LK-41",
    "geo.placename": "Jaffna, Northern Province, Sri Lanka",
    "geo.position": "9.6644;80.0210",
    ICBM: "9.6644, 80.0210",
    "google-site-verification": "REPLACE_WITH_YOUR_SEARCH_CONSOLE_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ta" className="scroll-smooth">
      <head>
        {/* Preconnect Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;500;600;700;800&family=Noto+Sans+Tamil:wght@400;500;600;700;800;900&family=Outfit:wght@500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* FontAwesome 6 Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* JSON-LD Rich Structured Data Schemas for Google Search Knowledge Graph */}
        <JsonLdSchema />
      </head>
      <body className="lang-ta bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

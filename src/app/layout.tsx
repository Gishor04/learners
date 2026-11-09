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
  metadataBase: new URL("https://dineshlearners.lk"),
  title: {
    default: "Jaffna Learners - Dinesh Driving School Jaffna | #1 Driving School (DMT: DS:385)",
    template: "%s | Jaffna Learners - Dinesh Driving School",
  },
  description:
    "Jaffna Learners - தினேஷ் லேணர்ஸ் யாழ்ப்பாணம் (DMT DS:385). Best Driving School in Jaffna with 3D Virtual Cockpit Simulator, Dual-Control Fleet (Auto/Manual Cars, Motorbikes, Tuk-Tuks, Heavy Vehicles) & Lady Instructors. Free Medical & Kachcheri Booking. Call 077 518 9963 / 021 4327 102.",
  keywords: [
    // Top Broad Queries
    "Jaffna Learners",
    "Jaffna learners driving school",
    "Learners in Jaffna",
    "Driving school in Jaffna",
    "Best driving school in Jaffna",
    "Best learners in Jaffna",
    "யாழ்ப்பாணம் லேணர்ஸ்",
    "சாரதி பயிற்சி நிலையம் யாழ்ப்பாணம்",
    "යාපනය රියදුරු පාසල",
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
  authors: [{ name: "K. Dinesh (க. தினேஷ்)", url: "https://dineshlearners.lk" }],
  creator: "K. Dinesh",
  publisher: "Dinesh Learners & Driving School",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "https://dineshlearners.lk",
    languages: {
      "ta-LK": "https://dineshlearners.lk?lang=ta",
      "en-US": "https://dineshlearners.lk?lang=en",
      "si-LK": "https://dineshlearners.lk?lang=si",
      "x-default": "https://dineshlearners.lk",
    },
  },
  openGraph: {
    type: "website",
    locale: "ta_LK",
    alternateLocale: ["en_US", "si_LK"],
    url: "https://dineshlearners.lk",
    siteName: "Dinesh Learners - Jaffna Learners Driving School",
    title: "Jaffna Learners - Dinesh Driving School Jaffna | #1 Driving School (DMT: DS:385)",
    description:
      "யாழ்ப்பாணத்தின் முன்னணி நவீன சாரதிப் பயிற்சி நிலையம் (Jaffna Learners). Modern 3D Simulator, Dual-Control Cars, Lady Instructors, Free Medical & Kachcheri Assistance. DMT Reg: DS:385.",
    images: [
      {
        url: "/assets/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Jaffna Learners - Dinesh Driving School Jaffna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaffna Learners - Dinesh Driving School Jaffna (DMT: DS:385)",
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
  verification: {
    google: "520mORiQEUN1ksnLdampjFYp7FcOA2uUe1vr1cuR4u4",
  },
  other: {
    "geo.region": "LK-41",
    "geo.placename": "Jaffna, Northern Province, Sri Lanka",
    "geo.position": "9.6644;80.0210",
    ICBM: "9.6644, 80.0210",
    "google-site-verification": "520mORiQEUN1ksnLdampjFYp7FcOA2uUe1vr1cuR4u4",
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
        {/* Google Search Console Verification Meta Tag */}
        <meta name="google-site-verification" content="520mORiQEUN1ksnLdampjFYp7FcOA2uUe1vr1cuR4u4" />

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

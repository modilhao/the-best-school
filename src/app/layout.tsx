import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Best School - Excellence in Education | Premium Private School",
    template: "%s | The Best School - Excellence in Education"
  },
  description: "🎓 The Best School offers excellence in education with innovative methodology. Early Childhood, Elementary and High School. Enrollment open! ✨ Schedule your visit.",
  keywords: [
    "private school",
    "early childhood education",
    "elementary school",
    "high school",
    "quality education",
    "innovative school",
    "child development",
    "active methodology",
    "bilingual school",
    "comprehensive education",
    "enrollment open",
    "best school",
    "personalized learning",
    "educational technology",
    "character formation"
  ],
  authors: [{ name: "The Best School", url: "https://thebest.edu.pl" }],
  creator: "The Best School",
  publisher: "The Best School",
  category: "Education",
  classification: "Educational Institution",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thebest.edu.pl",
    siteName: "The Best School",
    title: "The Best School - Excellence in Education | Premium Private School",
    description: "🎓 Discover the best education for your child at The Best School. Innovative methodology, qualified teachers and welcoming environment. Enrollment open! ✨",
    images: [
      {
        url: "https://thebest.edu.pl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Best School - Excellence in Education | Premium Private School",
        type: "image/jpeg",
      },
      {
        url: "https://thebest.edu.pl/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "The Best School - Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thebestschool",
    creator: "@thebestschool",
    title: "The Best School - Excellence in Education | Premium Private School",
    description: "🎓 Discover the best education for your child. Innovative methodology, qualified teachers. Enrollment open! ✨",
    images: {
      url: "https://thebest.edu.pl/og-image.jpg",
      alt: "The Best School - Excellence in Education",
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
  alternates: {
    canonical: "https://thebest.edu.pl",
    languages: {
      "en-US": "https://thebest.edu.pl",
    "pt-BR": "https://thebest.edu.pl/pt",
    },
  },
  other: {
    "msapplication-TileColor": "#2563eb",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="The Best School" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}

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
    default: "The Best School - Educação de Excelência",
    template: "%s | The Best School"
  },
  description: "Descubra a melhor educação para seu filho na The Best School. Programas inovadores, professores qualificados e ambiente acolhedor para o desenvolvimento integral das crianças.",
  keywords: [
    "escola particular",
    "educação infantil",
    "ensino fundamental",
    "ensino médio",
    "educação de qualidade",
    "escola inovadora",
    "desenvolvimento infantil",
    "metodologia ativa"
  ],
  authors: [{ name: "The Best School" }],
  creator: "The Best School",
  publisher: "The Best School",
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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://thebestschool.com.br",
    siteName: "The Best School",
    title: "The Best School - Educação de Excelência",
    description: "Descubra a melhor educação para seu filho na The Best School. Programas inovadores, professores qualificados e ambiente acolhedor.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Best School - Educação de Excelência",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best School - Educação de Excelência",
    description: "Descubra a melhor educação para seu filho na The Best School. Programas inovadores, professores qualificados e ambiente acolhedor.",
    images: ["/og-image.jpg"],
    creator: "@thebestschool",
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://thebestschool.com.br",
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
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}

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
    default: "The Best School - Educação de Excelência | Escola Particular Premium",
    template: "%s | The Best School - Educação de Excelência"
  },
  description: "🎓 The Best School oferece educação de excelência com metodologia inovadora. Educação Infantil, Ensino Fundamental e Médio. Matrículas abertas! ✨ Agende sua visita.",
  keywords: [
    "escola particular",
    "educação infantil",
    "ensino fundamental",
    "ensino médio",
    "educação de qualidade",
    "escola inovadora",
    "desenvolvimento infantil",
    "metodologia ativa",
    "escola bilíngue",
    "educação integral",
    "matrículas abertas",
    "melhor escola",
    "ensino personalizado",
    "tecnologia educacional",
    "formação cidadã"
  ],
  authors: [{ name: "The Best School", url: "https://thebestschool.com.br" }],
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
    locale: "pt_BR",
    url: "https://thebestschool.com.br",
    siteName: "The Best School",
    title: "The Best School - Educação de Excelência | Escola Particular Premium",
    description: "🎓 Descubra a melhor educação para seu filho na The Best School. Metodologia inovadora, professores qualificados e ambiente acolhedor. Matrículas abertas! ✨",
    images: [
      {
        url: "https://thebestschool.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Best School - Educação de Excelência | Escola Particular Premium",
        type: "image/jpeg",
      },
      {
        url: "https://thebestschool.com.br/og-image-square.jpg",
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
    title: "The Best School - Educação de Excelência | Escola Particular Premium",
    description: "🎓 Descubra a melhor educação para seu filho. Metodologia inovadora, professores qualificados. Matrículas abertas! ✨",
    images: {
      url: "https://thebestschool.com.br/og-image.jpg",
      alt: "The Best School - Educação de Excelência",
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
  alternates: {
    canonical: "https://thebestschool.com.br",
    languages: {
      "pt-BR": "https://thebestschool.com.br",
      "en-US": "https://thebestschool.com.br/en",
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
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
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

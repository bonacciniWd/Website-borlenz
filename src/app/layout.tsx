import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata configurada para SEO
export const metadata: Metadata = {
  title: "Borlenz - Design",
  description: "Bem-vindo à Borlenz! Oferecemos soluções criativas e personalizadas para sua marca brilhar.",
  keywords: "Borlenz, Soluções Criativas, Design, Branding, Web Design, Web Design em Santa Catarina,",
  authors: [{ name: "Equipe Borlenz", url: "https://borlenz.com" }],
  creator: "Borlenz",
  publisher: "Borlenz",
  alternates: {
    canonical: "https://borlenz.com",
  },
  openGraph: {
    type: "website",
    title: "Borlenz - Design",
    description: "Bem-vindo à Borlenz! Soluções criativas e personalizadas para marcas que querem se destacar.",
    url: "https://borlenz.com",
    siteName: "Borlenz",
    images: [
      {
        url: "https://i.ibb.co/k2yKGVJ/imgg.jpg",
        width: 1200,
        height: 630,
        alt: "Logo da Borlenz com um fundo criativo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Borlenz - Soluções Criativas",
    description: "Descubra como transformamos ideias em realidades incríveis para sua marca.",
    images: ["https://i.ibb.co/k2yKGVJ/imgg.jpg"],
    site: "@borlenz",
    creator: "@borlenz",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

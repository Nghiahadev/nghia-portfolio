import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nghiaha.com"),

  title: {
    default: "Nghia Ha | Web Developer & eCommerce Developer",
    template: "%s | Nghia Ha",
  },

  description:
    "Portfolio of Nghia Ha, a Web Developer and eCommerce Developer specializing in Next.js, React, Shopify, WordPress, full-stack development, and data solutions.",

  keywords: [
    "Nghia Ha",
    "Nghia Ha Web Developer",
    "Web Developer",
    "eCommerce Developer",
    "Shopify Developer",
    "WordPress Developer",
    "Next.js Developer",
    "React Developer",
    "Full Stack Developer",
    "Data Analyst",
    "E-Commerce",
    "E-Commerce Specialist",
  ],

  authors: [{ name: "Nghia Ha", url: "https://nghiaha.com" }],
  creator: "Nghia Ha",

  alternates: {
    canonical: "https://nghiaha.com",
  },

  openGraph: {
    title: "Nghia Ha | Web Developer & eCommerce Developer",
    description:
      "Web Developer and eCommerce Developer specializing in Next.js, React, Shopify, WordPress, full-stack development, and data solutions.",
    url: "https://nghiaha.com",
    siteName: "Nghia Ha Portfolio",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}


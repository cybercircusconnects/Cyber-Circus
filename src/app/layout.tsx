import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/providers";
import BusinessSchema from "@/components/BusinessSchema";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { baseMetadata } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
  preload: true
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="language" content="en" />
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Lahore" />
        <meta name="geo.position" content="31.4697;74.2728" />
        <meta name="ICBM" content="31.4697, 74.2728" />
        <meta name="author" content="Cyber Circus - Software Development Company" />
      </head>
      <body
        className={`${inter.variable} min-h-screen flex flex-col antialiased bg-white dark:bg-gray-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1" role="main">
            {children}
          </main>
          <Footer />
          <BusinessSchema />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}


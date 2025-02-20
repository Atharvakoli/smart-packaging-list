import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import localFont from "next/font/local";

const inter = localFont({
  src: "../../public/fonts/Inter.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SmartPack - Pack Smart, Travel Light",
  description:
    "Get personalized packing suggestions based on your destination's weather and your activities",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";

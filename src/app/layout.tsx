import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from '@clerk/nextjs'
import { zhTW } from "@clerk/localizations";
import Navbar from "@/components/navbar-style/Navbar";
import Footer from "@/components/Footer";
import BarSticky from "@/components/navbar-style/BarSticky";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cyi Portfolio",
  description: "2024 v2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={zhTW}>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <BarSticky />

          {children}

          {/* <Footer /> */}
        </body>
      </html>
    </ClerkProvider>
  );
}

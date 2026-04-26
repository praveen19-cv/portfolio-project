import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import company from "@/data/company.json";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Synchro Automation | Industrial Automation & PLC Solutions Chennai`,
  description: "Synchro Automation – Chennai based industrial automation company specializing in PLC programming, Special Purpose Machines (SPM), machine vision, robotics integration, and machine retrofitting for manufacturing industries.",
  keywords: [
    "Synchro Automation",
    "industrial automation Chennai",
    "PLC programming Chennai",
    "Special Purpose Machine SPM",
    "machine vision inspection",
    "factory automation India",
    "machine retrofitting",
    "robot integration UR series",
    "Siemens PLC",
    "automation company Chennai"
  ],
  authors: [{ name: "Synchro Automation", url: "https://synchro-automation.vercel.app" }],
  creator: "Synchro Automation",
  metadataBase: new URL("https://synchro-automation.vercel.app"),
  alternates: {
    canonical: "https://synchro-automation.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Synchro Automation | Industrial Automation & PLC Solutions",
    description: "We design, build, and integrate automation systems to upgrade your existing machines and improve productivity. Based in Chennai, India.",
    url: "https://synchro-automation.vercel.app",
    siteName: "Synchro Automation",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Synchro Automation - Industrial Automation Chennai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synchro Automation | Industrial Automation Chennai",
    description: "PLC programming, SPM development, machine vision, and automation solutions for manufacturing industries in India.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}

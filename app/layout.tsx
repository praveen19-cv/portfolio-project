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
  title: `${company.name} | Industrial Automation & PLC Solutions`,
  description: company.about,
  keywords: [
    "Synchro Automation", 
    "Industrial Automation Chennai", 
    "PLC Programming India", 
    "Machine Vision Systems", 
    "Special Purpose Machines (SPM)", 
    "Machine Retrofitting", 
    "Automation Integration"
  ],
  authors: [{ name: "Synchro Automation" }],
  creator: "Synchro Automation",
  publisher: "Synchro Automation",
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  themeColor: "#0b1220",
  openGraph: {
    title: `${company.name} | Industrial Automation`,
    description: company.about,
    url: "https://synchroautomation.com",
    siteName: company.name,
    images: [
      {
        url: "/images/machinelogo.png",
        width: 800,
        height: 600,
        alt: "Synchro Automation Logo"
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: company.name,
    description: company.about,
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

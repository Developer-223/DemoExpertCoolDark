import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://actechnicianexpertcool.com"),

  title: {
    default: "AC Technician in Faisalabad | Expert Cool AC Repair, Service & Installation",
    template: "%s | Expert Cool Faisalabad",
  },

  description:
    "Looking for AC repair in Faisalabad? Expert Cool offers fast and reliable AC installation, gas filling, maintenance, PCB repair, and refrigerator services. Same-day service available. Call now!",

  keywords: [
    "AC repair Faisalabad",
    "AC technician Faisalabad",
    "AC service near me",
    "AC installation Faisalabad",
    "AC gas filling",
    "inverter AC repair",
    "split AC service",
    "AC maintenance Faisalabad",
    "refrigerator repair Faisalabad",
    "Expert Cool AC technician",
  ],

  icons: {
    icon: "/images/logo.png",
  },

  openGraph: {
    title: "AC Technician Faisalabad | Expert Cool AC Services",
    description:
      "Professional AC repair, installation, gas filling & maintenance in Faisalabad. Affordable, fast & reliable service for homes and offices.",
    url: "https://actechnicianexpertcool.com",
    siteName: "AC Technician Expert Cool Faisalabad",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/images/og-image.png", // create a 1200x630 image
        width: 1200,
        height: 630,
        alt: "AC Technician Expert Cool Faisalabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AC Repair Faisalabad | Expert Cool",
    description:
      "Need AC repair or installation in Faisalabad? Expert Cool provides quick, affordable, and professional services.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://actechnicianexpertcool.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{ colorScheme: 'dark' }}>
      <body className={`${inter.variable} ${syne.variable} font-inter antialiased`} >
        {children}
        <GoogleAnalytics gaId="G-M76EC89NW9" />
      </body>
    </html>
  );
}

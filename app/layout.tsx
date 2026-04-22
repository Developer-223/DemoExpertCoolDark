import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
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
  title: "AC Technician Expert Cool Faisalabad | AC Repair, Installation & Services",
  description: "Professional AC technician in Faisalabad. We deal in wall mounted, floor standing, and ceiling hanging AC installation, service, gas filling, and PCB repairing. Reliable refrigeration and appliance repair.",
  icons: {
    icon: "/images/logo.png",
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
      </body>
    </html>
  );
}

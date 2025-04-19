import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Altitude Finder – GPS Altimeter & Compass for Hikers",
  description:
    "Measure your altitude with GPS and barometric precision. Perfect for hiking, trekking, and outdoor adventures. Track elevation, speed, and routes in real time.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" }, // browser tabs
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" }, // iOS home screen
    ],
  },
  openGraph: {
    title: "Altitude Finder – GPS Altimeter & Compass",
    description:
      "Track your altitude and elevation with precision using GPS and barometric sensors. Includes compass, speedometer, and session export features.",
    url: "https://www.altitudefinder.com", // 🔁 Replace with your actual domain
    siteName: "Altitude Finder",
    images: [
      {
        url: "/logo.png", // 👈 Open Graph fallback image
        width: 512,
        height: 512,
        alt: "Altitude Finder Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Altitude Finder – GPS Altimeter & Compass",
    description:
      "Track elevation, speed, and direction in real-time. Perfect for hiking and outdoor exploration.",
    images: ["/logo.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

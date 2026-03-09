import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  title: {
    default: "ArmakatOne | Premium Construction & Engineering",
    template: "%s | ArmakatOne",
  },
  description: "A full-service Greek construction and engineering company delivering modern, premium workspaces and homes. Studies, construction, energy, BIM, and smart home solutions.",
  keywords: ["construction", "engineering", "architecture", "Athens", "Greece", "BIM", "smart home", "energy autonomy", "renovation"],
  authors: [{ name: "ArmakatOne" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ArmakatOne",
    title: "ArmakatOne | Premium Construction & Engineering",
    description: "A full-service Greek construction and engineering company delivering modern, premium workspaces and homes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArmakatOne | Premium Construction & Engineering",
    description: "A full-service Greek construction and engineering company delivering modern, premium workspaces and homes.",
  },
  icons: {
    icon: "/Logo/ArmakatOne_Logo_Icon.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${outfit.variable} ${jakarta.variable} antialiased bg-[#050505] text-[#FAFAFA] font-jakarta selection:bg-white/20`}
      >
        <SmoothScroll>
          <Header />
          <main className="min-h-screen relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

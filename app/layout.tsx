import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CustomCursor from "@/components/CustomCursor";
import MobileDock from "@/components/MobileDock";

export const metadata: Metadata = {
  title: "Raghukul Defence & Sport Academy | Army Training & Fitness",
  description:
    "Preparing youth for the armed forces, equipping women with livelihood skills, and building a fitter community in Lucknow.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=Rajdhani:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#E5E7DF] text-[#181B15] selection:bg-[#3F4632] selection:text-white pb-16 lg:pb-0">
        <CustomCursor />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <MobileDock />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Altivus — Digital Growth Agency for Roofing Companies",
  description:
    "Altivus helps US roofing companies generate more leads, book more jobs, and achieve predictable growth through premium digital marketing strategies.",
  keywords: "roofing marketing, roofing leads, roofing SEO, roofing ads, digital agency",
  openGraph: {
    title: "Altivus — Digital Growth Agency for Roofing Companies",
    description: "More leads. More booked jobs. Predictable growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable}`}>
      <body className="antialiased bg-obsidian text-parchment font-cormorant">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Barlow_Condensed, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HtmlLangSync from "@/components/subc/HtmlLangSync";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Serraria - Céu Azul",
  description: "Serraria Céu Azul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${barlowCondensed.variable} ${jost.variable} antialiased`}
      >
        <HtmlLangSync />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

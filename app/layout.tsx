import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NeoCode - Transformation digitale par l'IA",
  description: "Accélérez votre compétitivité avec des solutions modernes et intelligentes. Modernisation d'applications métier et transformation de fichiers Excel en applications performantes.",
  keywords: "IA, transformation digitale, modernisation, Excel, VBA, logiciels métier, DSI, dirigeants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

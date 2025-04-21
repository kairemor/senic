import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SENEGAL INGENIERIE ET CONSEILS (S.E.N.I.C.)",
  description:
    "Votre partenaire de confiance pour l'excellence technique. Nous fournissons des solutions d'ingénierie complètes pour vos projets de construction et d'infrastructure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

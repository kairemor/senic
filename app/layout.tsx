import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SENEGAL INGENIERIE ET CONSEILS (S.E.N.I.C.)",
  description:
    "Votre partenaire de confiance pour l'excellence technique. Nous fournissons des solutions d'ingénierie complètes pour vos projets de construction et d'infrastructure.",
  keywords:
    "ingénierie, conseils, construction, infrastructure, Sénégal, S.E.N.I.C., solutions techniques, expertise en ingénierie, projets de construction",
  authors: [
    {
      name: "Mor Kaire",
      url: "https://kairemor.com",
    },
  ],
  creator: "Mor Kaire",
  metadataBase: new URL(
    "https://res.cloudinary.com/kairemor/image/upload/v1748609690/WhatsApp_Image_2025-05-29_at_18.06.06_branmu.jpg"
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

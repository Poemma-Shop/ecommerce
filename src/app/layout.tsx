import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Poemma | Bisutería Exclusiva y Accesorios con Alma",
  description:
    "Descubre en Poemma piezas únicas de bisutería diseñadas para resaltar tu esencia. Joyería artesanal, collares, pulseras y accesorios que cuentan una historia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}

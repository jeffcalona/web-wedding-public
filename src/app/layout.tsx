import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { bellota, theNautigal } from "./fonts";

export const metadata: Metadata = {
  title: "Invitación Boda Camila y Camilo",
  description: "Invitación digital para la boda de Camila Bedoya y Camilo Banega",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${bellota.variable} ${theNautigal.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}

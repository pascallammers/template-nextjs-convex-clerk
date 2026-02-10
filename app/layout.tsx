import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import { ConvexClientProvider } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "Parasitcheck — Der smarte Wurmtest für deinen Hund",
  description:
    "Schluss mit unnötigen Wurmkuren. Parasitcheck ist der smarte Parasitentest für Zuhause. Einfach Probe einsenden — Laborergebnis in 24–48 Stunden.",
  openGraph: {
    title: "Parasitcheck — Der smarte Wurmtest für deinen Hund",
    description:
      "Erst testen, dann behandeln. Laborergebnis in 24–48 Stunden direkt aufs Handy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSerif.variable} antialiased`}
      >
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import { NextAuthProvider } from "./providers/sessionProvider";
import ReactQueryClientProvider from "@/components/ReactQueryClientProvider/ReactQueryClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zeta",
  description: "Assistente virtual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <NextAuthProvider>
        <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable}`}>
            <Navbar />
            <main>{children}</main>
          </body>
        </html>
      </NextAuthProvider>
    </ReactQueryClientProvider>
  );
}

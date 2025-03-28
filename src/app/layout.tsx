import "./globals.css";

import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Space_Grotesk } from 'next/font/google'

import { Footer } from "@/components/footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ['500', '400']
});

export const metadata: Metadata = {
  title: "Interface - Positivus Free Interface",
  description: "By Lucas D'Amico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased xl:max-w-[90%] m-auto`}
      >
        <Navbar />

        {children}

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

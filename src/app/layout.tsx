import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Harshit — AI/ML Engineer & Full-Stack Developer",
  description:
    "Developer portfolio for Harshit, an AI/ML engineer and full-stack developer (B.Tech VESIT Mumbai). Building multi-agent architectures, voice pipelines, and production full-stack platforms.",
};

import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} dark`}>
      <body className="antialiased font-sans">
        <div className="grain-overlay pointer-events-none" />
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}


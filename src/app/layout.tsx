import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "./components/theme-provider";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Shadcn com Nextjs 14",
  description: "Estudo shadcn",
  keywords: [
    "Next.js",
    "Next.js 14",
    "React.js",
    "Rogerio Bastos",
    "Curso Next.js",
    "JavaScript",
    "TypeScript",
    "Full-stack",
    "Tailwind CSS",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>{children}</ThemeProvider>{" "}
      </body>
    </html>
  );
}

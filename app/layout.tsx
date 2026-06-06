import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hezekiah Womiloju — Frontend Developer",
  description: "Frontend Developer specializing in React, Next.js & TypeScript. Building clean, performant web experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${poppins.className} noise-bg`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

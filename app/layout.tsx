import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "포켓몬 도감",
  description: "next.js 및 tailwindcss 연습",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}

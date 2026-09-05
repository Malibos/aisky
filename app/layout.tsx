import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI SKY",
  description: "Sztuczna Inteligencja dla Biznesu",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="m-0 h-screen overflow-hidden bg-black font-light antialiased">{children}</body>
    </html>
  );
}

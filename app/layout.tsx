import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DarsNote — Asisten Kuliah",
  description: "Transkrip kuliah Arab, terjemahan Indonesia, dan penjelasan istilah.",
  applicationName: "DarsNote",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

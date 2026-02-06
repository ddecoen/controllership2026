import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Controllership Roadmap 2026",
  description: "Strategic roadmap for controllership excellence: fundraising, audit completion, and operational scaling",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

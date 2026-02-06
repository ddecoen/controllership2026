import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Controllership Roadmap 2026 | Coder",
  description: "Take friction out of doing business while keeping Coder secure, compliant, and accountable. Strategic roadmap for controllership excellence: fundraising, audit completion, and operational scaling.",
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

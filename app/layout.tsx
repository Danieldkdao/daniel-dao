import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Critical Thinkers - eCYBERMISSION 2025-2026 Project Website",
  description:
    "This is the the official website of the Critical Thinkers, a 9th grade team from Lawrence Virtual School competing in the 2025-2026 eCYBERMISSION STEM competition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

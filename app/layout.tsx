import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Dao - Official Website",
  description:
    "This is the the official website of Daniel Dao, a high school student at Lawrence Virtual School who loves STEM, programming, and tennis.",
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

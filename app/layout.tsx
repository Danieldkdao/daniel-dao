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
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-32 top-10 h-80 w-80 rotate-6 bg-linear-to-br from-amber-400/30 via-fuchsia-500/25 to-sky-500/20 blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-72 bg-sky-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-300/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08)_0,_rgba(255,255,255,0)_45%)]" />
        </div>
        <div className="relative flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}

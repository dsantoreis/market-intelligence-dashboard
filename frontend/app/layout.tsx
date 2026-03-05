import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Market Intelligence Dashboard",
  description: "Portfolio demo using Next.js + FastAPI",
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

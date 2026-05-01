import type { Metadata } from "next";
import "./globals.css";
import "./reference-home.css";

export const metadata: Metadata = {
  title: "Stitch Admission Engine",
  description:
    "Premium admission preparation platform for varsity, medical, and engineering candidates.",
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

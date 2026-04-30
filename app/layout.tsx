import type { Metadata } from "next";
import SiteFooter from "../components/layout/SiteFooter";
import SiteNavbar from "../components/layout/SiteNavbar";
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
      <body>
        <div className="site-layout">
          <SiteNavbar />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

import SiteFooter from "../../components/layout/SiteFooter";
import SiteNavbar from "../../components/layout/SiteNavbar";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="site-layout">
      <SiteNavbar />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

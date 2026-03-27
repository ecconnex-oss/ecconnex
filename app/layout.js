import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.ecconnex.com"),
  title: {
    default: "Ecconnex | Fast Cash Offers for Sellers and Investor Deals",
    template: "%s | Ecconnex"
  },
  description:
    "Ecconnex helps motivated sellers move quickly and connects investors with high-potential off-market real estate opportunities.",
  keywords: [
    "real estate wholesaling",
    "cash home buyers",
    "sell house fast",
    "investment properties",
    "off market deals"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://unacreativehub.agency"),
  title: {
    default: "UNA Creative Hub – Designing the Future of Human Experience",
    template: "%s | UNA Creative Hub",
  },
  description:
    "UNA Creative Hub is a cinematic, immersive design studio building intelligent creative systems for brands, products, and industries.",
  openGraph: {
    title: "UNA Creative Hub",
    description: "Designing the Future of Human Experience",
    url: "https://unacreativehub.agency",
    siteName: "UNA Creative Hub",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  other: {
    sameAs: [
      "https://www.youtube.com/@una_creativehub",
      "https://instagram.com/una_creativehub/",
      "https://x.com/una_creativehub",
      "https://facebook.com/profile.php?id=61567309206086",
      "https://pinterest.com/una_creativehub",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body
        className={`bg-black text-white flex flex-col min-h-screen ${inter.className}`}>
        <Navbar />
        <main className="flex-grow">
      <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
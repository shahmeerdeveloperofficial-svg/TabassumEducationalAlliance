import { Poppins } from "next/font/google";
import "./globals.css";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import LenisSmooth from "../components/LenisSmooth";
import Footer from "../components/Footer";

// Load Poppins font
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Tabassum Educational Alliance Regd. — Since 2008",
  description: "Tabassum Educational Alliance Regd. — The Fastest Growing Educational Network All Over Pakistan Since 2008.",
  icons: {
    icon: "/tea-logo.png",
    shortcut: "/tea-logo.png",
    apple: "/tea-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={poppins.className}>
        {/* <TopBar /> */}
        <LenisSmooth />
        <main className="relative">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

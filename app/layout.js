import { Luckiest_Guy, Zilla_Slab } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Newsletter from "@/components/layout/newsletter";
import Footer from "@/components/layout/footer";

const luckiest = Luckiest_Guy({
  weight: "400",
  variable: "--font-luckiest",
  subsets: ["latin"],
  display: "swap",
});

const zilla = Zilla_Slab({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Triple Shot Cafe",
  description:
    "Your daily dose of energy and flavor. Indulge in a variety of handcrafted coffee drinks, from classic espressos to innovative concoctions. Perfect for a quick pick-me-up or a leisurely catch-up.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${zilla.className} ${luckiest.variable}`}>
        <Header />
        {children}
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}

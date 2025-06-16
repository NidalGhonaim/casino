import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import styles from "./layout.module.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Menu from "@/components/menu";
import MobileMenu from "@/components/mobile-menu";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Casino",
  description: "Demo site for an online casino platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${styles.container} ${poppins.variable}`}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
        <Menu />
        <MobileMenu />
        <Analytics />
      </body>
    </html>
  );
}

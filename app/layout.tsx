import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Footer from "./components/footer";
import Header from "./components/header";
import { Providers } from "./components/providers";
import "./globals.css";

const DMSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hadeed Portfolio",
  description: "Hadeed Ahmed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={DMSans.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

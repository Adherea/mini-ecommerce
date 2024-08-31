import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { poppins } from "./fonts";
import Sosmed from "./components/Sosmed";
import Titlenya from "./components/Titlenya";
import Produk from "./components/Produk";
import Service from "./components/Service";
import Form from "./components/Form";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nazela Jati",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="../public/icon/iconss.png" />
      <body className={`inter.className ${poppins.className}`}>
        <Sosmed />
        <Navbar />
        <Titlenya />
        <Produk />
        <Service />
        <Form />
        <Footer />
      </body>
    </html>
  );
}

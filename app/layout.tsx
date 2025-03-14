import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import GlobalState from "../context/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Rishab Mandal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalState>
        <body className="flex flex-row">
          <div className="flex-1 bgimg">
            <div className="backgrounmd">{children}</div>
          </div>
          <Navbar />
        </body>
      </GlobalState>
    </html>
  );
}

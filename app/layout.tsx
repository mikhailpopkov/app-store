import type { Metadata } from "next";
import { Raleway } from 'next/font/google';
import "./globals.css";
import './scss/main.scss';
import Header from "./components/shared/header";

const ralewaySans = Raleway({
  variable: "--font-raleway-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AppStore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ralewaySans.variable} antialiased`}>
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

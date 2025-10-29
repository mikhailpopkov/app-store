import type { Metadata } from "next";
import { Raleway } from 'next/font/google';
import "./globals.css";

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
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

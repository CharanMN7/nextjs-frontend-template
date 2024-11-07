import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"

export const metadata: Metadata = {
  // Change this to your liking:
  title: "Charan's Next 14 Template",
  description: "This is a Next 14 template created by Charan (https://charan.dev/)",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

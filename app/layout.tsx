import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // Change this to your liking:
  title: "Charan's Next 14 Template",
  description: "This is a Next 14 template created by Charan (https://charan.dev/)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

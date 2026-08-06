import type { Metadata } from "next";
import "./global.css";
import localFont from "next/font/local";

const author = localFont({
  variable: "--font-author",
  src: [
    {
      path: "../fonts/Author-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Author-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Author-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Author-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Author-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Cozypage",
  description: "The coziest startpage you'll ever use.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={author.className}>
      <body>{children}</body>
    </html>
  );
}

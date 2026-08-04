import type { Metadata } from "next";
import "./global.css";
import localFont from "next/font/local";

const author = localFont({
  variable: "--font-author",
  src: [
    {
      path: "../fonts/Author-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Author-ExtralightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../fonts/Author-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Author-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/Author-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Author-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Author-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Author-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/Author-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Author-SemiboldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/Author-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Author-BoldItalic.woff2",
      weight: "700",
      style: "italic",
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

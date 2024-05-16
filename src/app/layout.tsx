import React from "react";
import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Rodrigo Escalera Portfolio",
  description: "This is Rodrigo Escalera's portfolio.",
};

const cabin = Cabin({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cabin.className} main-background`}>
        {<div className="pattern">{children}</div>}
      </body>
    </html>
  );
}

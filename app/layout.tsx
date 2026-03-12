import "./globals.css";
import Navbar from "@/app/_components/navbar";
import "./types/index.ts";
import {Cairo} from "next/font/google"
import {Metadata} from "next"
import { RootLayoutProps } from "./types/index";

const cairo = Cairo({
  subsets: ['latin',"arabic"],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: "Next App ",
  description: "Next.js 13 App with TypeScript and Tailwind CSS",
};

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

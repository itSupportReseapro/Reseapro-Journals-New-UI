import { Cardo, Hind, Geist_Mono } from "next/font/google";
import "./globals.css";

const cardo = Cardo({
  variable: "--font-cardo",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const hind = Hind({
  variable: "--font-hind",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Reseapro Journals",
  description: "Reseapro Journals editorial header preview.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cardo.variable} ${hind.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

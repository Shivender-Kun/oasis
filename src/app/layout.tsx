import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oasis Care — World-Class Medical Treatment in India | Affordable Healthcare for NRIs",
  description:
    "Oasis Care — World-class medical treatment in India at affordable costs. Trusted by NRIs worldwide for safe, affordable, and hassle-free healthcare solutions.",
  keywords:
    "medical tourism India, affordable healthcare, NRI healthcare, medical treatment India, Oasis Care",
  authors: [{ name: "Oasis Care" }],
  openGraph: {
    title: "Oasis Care — World-Class Medical Treatment in India",
    description:
      "Save up to 80% on medical costs. JCI-accredited hospitals, 200+ specialist doctors.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

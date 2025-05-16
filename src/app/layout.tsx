import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Navigation from "@/components/navbar/navigation";
import openGraph from "@/assets/opengraph/opengraph.png";
import { ThemeProvider } from "@/components/common/theme-provider";
import { Analytics } from "@vercel/analytics/react";
 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fajar anugrah",
  description:
    "Hello, my name is fajar anugrah, I am a full stack developer, I also study how artificial intelligence and machine learning are applied in applications to support integrated digital facilities.",
  openGraph: {
    images: {
      url: openGraph.src,
      width: 1200,
      height: 630,
    },
  },
  keywords: [
    "Fajar anugrah",
    "Fajar",
    "Anugrah",
    "Developer",
    "FullStack Developer",
    "jasa website",
    "jasa",
    "Jasa Website",
    "Programmer",
  ],
  authors: [
    {
      name: "Fajar anugrah",
      url: "https://github.com/masfajaranugrah",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
 <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta
          name="google-adsense-account"
          content={process.env.NEXT_PUBLIC_AD_CLIENT}
        />

        <AdScript adClient={process.env.NEXT_PUBLIC_AD_CLIENT} /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          enableSystem={true}
          defaultTheme="dark"
          attribute="class"
        >
          <Navigation />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

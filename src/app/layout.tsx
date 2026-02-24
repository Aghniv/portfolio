import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aghniv Paul | Full Stack Developer",
  description: "Modern portfolio website showcasing my skills and projects as a Full Stack Developer",
  keywords: "developer, full stack, portfolio, react, nextjs, typescript",
  authors: [{ name: "Aghniv Paul" }],
  openGraph: {
    title: "Aghniv Paul | Full Stack Developer",
    description: "Modern portfolio website showcasing my skills and projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
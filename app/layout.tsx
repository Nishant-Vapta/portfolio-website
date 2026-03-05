import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export const metadata: Metadata = {
  title: "Nishant Vapta | Frontend Engineer",
  description: "Portfolio of Nishant Vapta, Frontend Software Engineer focusing on React, Redux, and modern UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
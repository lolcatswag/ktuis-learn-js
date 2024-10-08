import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

import Link from "next/link";
import { BookIcon, BookOpenCheckIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "JS School",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${GeistSans.className} ${GeistMono.className} h-full bg-background flex flex-col overflow-y-scroll`}>
        <header className="h-20 w-full flex flex-row gap-x-20 items-center p-4 border-b border-primary/10 bg-background/70 
          z-50 backdrop-blur-xl sticky top-0 shadow-xl shadow-black/5"
        >
          <span className="text-5xl before:content-['JS'] before:text-yellow-400 before:font-black flex">
            <p className="hidden sm:block">chool</p>
          </span>
          <div className="h-full flex flex-row">
            <Link href="/1" className="h-full px-4 rounded-full flex flex-row items-center gap-x-2 hover:bg-primary/10 transition">
              <BookIcon className="h-5 w-5"/>
              Учебник
            </Link>
            <Link href="/test/1" className="h-full px-4 rounded-full flex flex-row items-center gap-x-2 hover:bg-primary/10 transition">
              <BookOpenCheckIcon className="h-5 w-5"/>
              Тесты
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

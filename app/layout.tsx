import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-screen bg-black antialiased`}
      >
        <div className="xl:px-30 container mx-auto h-full max-w-6xl">
          <div className="grid h-full grid-cols-4">
            <div className="col-span-3 border-x-[1px] border-neutral-800 lg:col-span-2">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

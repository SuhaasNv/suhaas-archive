import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suhaas Archive",
  description: "Personal photography archive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-gray-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center">
                <h1 className="text-xl font-medium">Suhaas Archive</h1>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-gray-200">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Suhaas Archive
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

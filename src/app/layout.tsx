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
          <header className="border-b border-neutral-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <nav className="flex h-16 items-center justify-between">
                <a href="/" className="text-lg font-medium text-neutral-900">
                  SUHAAS NV
                </a>
                <div className="flex gap-6">
                  <a
                    href="#"
                    className="text-sm font-light text-neutral-600 hover:text-neutral-900"
                  >
                    Archive
                  </a>
                  <a
                    href="#"
                    className="text-sm font-light text-neutral-600 hover:text-neutral-900"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-sm font-light text-neutral-600 hover:text-neutral-900"
                  >
                    Contact
                  </a>
                </div>
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-neutral-200">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <p className="text-sm font-light text-neutral-500">
                © {new Date().getFullYear()} Suhaas NV
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

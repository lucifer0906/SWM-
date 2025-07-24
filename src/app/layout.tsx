import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SWM - Precision Wire Mesh Manufacturing",
  description: "Leading manufacturer of high-precision wire mesh products for filter-making industries. Serving automotive, pharmaceutical, food processing, and water treatment sectors.",
  keywords: "wire mesh, filter mesh, industrial mesh, precision mesh, manufacturing, India, B2B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <body className={`${inter.className} bg-background text-foreground overflow-x-hidden`}>
        <main className="min-h-screen relative w-full">
          {children}
        </main>
        <Footer />
      </body>
    </ThemeProvider>
  );
}

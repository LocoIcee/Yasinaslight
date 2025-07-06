import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/layout/Layout";
import "./globals.css";
import "./index.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yasinas Light",
  description: "Welcome to Yasinas Light.",
  icons: {
    icon: "assets/favicon.ico"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout >
          {children}
        </Layout>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./colors.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Algorion Research and Analysis",
  description: "A research and analysis company specializing in market research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased `}
      suppressHydrationWarning
    >
      <body className="">
        {children}
      </body>
    </html>
  );
}

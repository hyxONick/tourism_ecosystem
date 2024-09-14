import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travel Website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="icon" href="/img/Beach.svg"></link>
      </head>

      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

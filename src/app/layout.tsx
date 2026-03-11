import type { Metadata } from "next";
import { roboto } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flux Technologies — Client Portal",
  description: "Your IT environment command center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

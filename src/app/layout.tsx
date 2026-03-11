import type { Metadata } from "next";
import { roboto } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flux Technologies — Client Portal",
  description: "Your IT environment command center",
  icons: {
    icon: [
      {
        url: "/favicon-light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
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

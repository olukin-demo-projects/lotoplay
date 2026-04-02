import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

// Set Roboto as the primary variable
const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin", "cyrillic"], // Added cyrillic for the Ukrainian text
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Гурд Грим та Грім",
  description: "Офіційний сайт українського рок-гурту",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={cn("h-full antialiased dark", roboto.variable, "font-sans")} // Forced dark mode to match design
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
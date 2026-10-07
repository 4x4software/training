import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shortlink",
  description: "Your link workspace",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider
          appearance={{
            variables: {
              colorBackground: "#171c19",
              colorInput: "#222a25",
              colorInputForeground: "#edf3ee",
              colorNeutral: "#cbd5ce",
              colorPrimary: "#78ad8d",
              colorForeground: "#edf3ee",
              colorMutedForeground: "#a3b0a7",
            },
          }}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
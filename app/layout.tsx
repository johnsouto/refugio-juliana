import "./globals.css";
import type { Metadata } from "next";
import TopLoader from "@/components/TopLoader";
import RouteTransition from "@/components/RouteTransition";

export const metadata: Metadata = {
  title: "Nosso Refúgio",
  description: "Refúgio do casal — amor, fé e alegria.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        <TopLoader />
        <RouteTransition>{children}</RouteTransition>
      </body>
    </html>
  );
}

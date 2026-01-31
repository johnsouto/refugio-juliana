import "./globals.css";
import type { Metadata } from "next";
import TopLoader from "@/components/TopLoader";
import RouteTransition from "@/components/RouteTransition";
import PinGate from "@/components/PinGate";

export const metadata: Metadata = {
  title: "Nosso Refúgio",
  description: "Amor, fé e cuidado.",
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
        <PinGate>
          <RouteTransition>{children}</RouteTransition>
        </PinGate>
      </body>
    </html>
  );
}

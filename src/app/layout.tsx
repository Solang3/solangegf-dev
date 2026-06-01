import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  Press_Start_2P,
  Syne,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://solangegf.dev"),
  title: {
    default: "Solange Gonzalez — Full-stack developer & AI builder",
    template: "%s · solangegf.dev",
  },
  description:
    "Desarrolladora full-stack y AI builder con 20+ años. Escribo HTML desde 1994. Buenos Aires, Argentina.",
  openGraph: {
    title: "Solange Gonzalez — Full-stack developer & AI builder",
    description:
      "20+ años construyendo producto digital. AI-native. Buenos Aires, Argentina.",
    url: "https://solangegf.dev",
    siteName: "solangegf.dev",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrains.variable} ${pressStart.variable} ${syne.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
